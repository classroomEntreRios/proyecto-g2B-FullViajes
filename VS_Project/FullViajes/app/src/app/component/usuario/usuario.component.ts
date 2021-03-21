import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public service: UsuarioService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id_usuario: 0,
      nickname: '',
      email: '',
      password: '',
      // rol: null,
      user_foto: '',
      user_descripcion: '',
      nombre: '',
      apellido: ''
    };
  }

  onSubmit(form: NgForm) { 
    this.insertRecord(form); 
  }

  insertRecord(form: NgForm) {
    this.service.postUsuario(form.value).subscribe(res => { this.resetForm(form); });
  }

}



