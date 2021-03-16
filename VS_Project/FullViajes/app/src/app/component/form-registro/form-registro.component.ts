import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators}  from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
  RegistrarUsuario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.RegistrarUsuario=this.fb.group({
      Nombre:['',Validators.required],
      Apellido:['',Validators.required],      
      NickName:['',Validators.required],
      Email:['',Validators.required],
      Password:['',Validators.required],
      Descripcion:[''],
    })
   }

  ngOnInit(): void {
  }
  agregar (){
    console.log(this.RegistrarUsuario)
  }
}
