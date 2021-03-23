import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/services/usuario.service';
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public service: UsuarioService, private router:Router) { }

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
    this.login(form);
  }
  login(form : NgForm){
    this.service.postUsuario(form.value).subscribe(res => {this.resetForm(form);});
    this.router.navigate(['/usuario']);
}

 }

