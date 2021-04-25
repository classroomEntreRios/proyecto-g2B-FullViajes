import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  rol: string = '1';
  user: any;
  user_id = "";
  userForm: FormGroup = this.formBuilder.group({
    nickname: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required, Validators.pattern("/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/")],
    rol: ['', Validators.required],
    descripcion: ['']
  });

  constructor(private formBuilder: FormBuilder, public service: UsuarioService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user_id = this._route.snapshot.paramMap.get('user_id')!;
    this.service.acceder(this.user_id).subscribe(
      (usuario: any) => {
        if (usuario.rol=='0'){
          this.userForm.patchValue({rol:'0'});
        }else{
          this.userForm.patchValue({rol:'1'});
        }
        this.userForm.patchValue(
          {
            nickname: usuario.nickname,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            descripcion: usuario.user_descripcion,
            email: usuario.email,           
          }
        );
      }
    );
  }

  onSubmit(): void {
    //this.errorc = false;
    this.service.clearFormData();
    this.service.formData = {
      nickname: this.userForm.value.nickname,
      nombre: this.userForm.value.nombre,
      apellido: this.userForm.value.apellido,
      password: this.userForm.value.password,
      email: this.userForm.value.email,
      user_foto: "img/profile.png",
      active: true,
      token: "",
      rol: this.userForm.value.rol,
      user_descripcion: this.userForm.value.descripcion,
    };
    this.updateRecord();
  }

  updateRecord() {
    this.service.editUser(this.service.formData,this.user_id).subscribe(
      res => {
        //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
        this.router.navigate(['/admusers']);
        this.userForm.reset();
      },
      (err: HttpErrorResponse) => {

        var MensajeError = err.error.ModelState.Error;

        console.log(MensajeError);
        if (MensajeError == "EL MAIL YA SE ENCUENTRA EN LA BASE DE DATOS") {
          // this.errorc = true;
          this.userForm.reset();
        }
        else {
          if (MensajeError == "EL NICKNAME YA SE ENCUENTRA EN LA BASE DE DATOS") {
            // this.erroru = true;
            this.userForm.reset();
          } else {
            console.log('algo malio sal');
            this.userForm.reset();
          }
        }
        this.router.navigate(['/adduser']);
      }
    );
  }
}