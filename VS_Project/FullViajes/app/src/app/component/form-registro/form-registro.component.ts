import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
  constructor(public service: UsuarioService, private router: Router) { }
  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      nombre: '',
      apellido: '',
      nickname: '',
      email: '',
      password: '',
      rol: 1,
      active: false,
      token: '',
      user_foto: '',
      user_descripcion: '',
    };
  }
  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postUsuario(form.value).subscribe(res => { this.resetForm(form); });
    this.resetForm();
    this.router.navigate(['/usuario']);
  }
}
