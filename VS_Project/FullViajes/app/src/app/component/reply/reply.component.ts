import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoService } from 'src/app/services/foro.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  topic_id='';
  user_id='';
  tema:any;
  status='';

  constructor(public service: ForoService, private router: Router, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id')!;
    this.status = localStorage.getItem('resultado')!;
    if (parseInt(this.status) == 0) {
      this.router.navigate(['/levelaccessforo']);
    }
    this.topic_id = this._route.snapshot.paramMap.get('topic_id')!;
    this.service.acceder(this.topic_id).subscribe(
      (topic: any) => {
        this.tema=topic;
      }
    );
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formResp = {
      id_topics: parseInt(this.topic_id),
      id_usuario: parseInt(this.user_id),
      id_respuesta: 0,
      contenido: '',
      fecha_creacion: new Date(),
      fecha_modificacion: new Date(),
    };
  }

  onSubmit(form: NgForm) {
    form.value.id_topics=parseInt(this.topic_id);
    form.value.id_usuario=parseInt(this.user_id);
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postReply(form.value)
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

}
