import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ForoService } from 'src/app/services/foro.service';
/*PARA CKEDITOR*/

@Component({
  selector: 'app-newtopic',
  templateUrl: './newtopic.component.html',
  styleUrls: ['./newtopic.component.css']
})
export class NewtopicComponent implements OnInit {
  status = '';
  user_id = '';


  constructor(public service: ForoService, private router: Router) {


  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
      id_topics: 0,
      id_usuario: parseInt(this.user_id),
      titulo: '',
      contenido: '',
      fecha_creacion: new Date(),
      fecha_modificacion: new Date(),
    };
  }

  onSubmit(form: NgForm) {
    form.value.id_usuario=parseInt(this.user_id);
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postTema(form.value)
      .subscribe(
        res => {
          this.resetForm(form);
          this.resetForm();
          this.router.navigate(['/topicos']);
        },
        (err: HttpErrorResponse) => {

          var MensajeError = err.error.message;

        }
      );
  }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id')!;
    this.status = localStorage.getItem('resultado')!;
    if (parseInt(this.status) == 0) {
      this.router.navigate(['/levelaccessforo']);
    }

  }


}
