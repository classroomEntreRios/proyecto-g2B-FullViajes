import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  error = false;
  mensaje = '';
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
    this.service.login(form.value).subscribe(

      (res: any) => {
        this.error = false;
        if (res.resultado == 1) {
          localStorage.setItem('token', res.datos['token']);
          localStorage.setItem('rol', res.datos['rol']);
          localStorage.setItem('nickname', res.datos['nicname']);
          localStorage.setItem('imgperfil', res.datos['imgperfil']);
          console.log(res);
          if(res.datos['rol']==1){
          this.router.navigate(['/principal2']);
          }else{
            this.router.navigate(['/principal2']);
          }
        }
        else {
          if (res.resultado == 0) {
            localStorage.setItem('resultado', res.resultado);
            console.log(res);
            this.mensaje = res.mensaje;
            this.error = true;
          }

        }
      }   
    );
  }
}

