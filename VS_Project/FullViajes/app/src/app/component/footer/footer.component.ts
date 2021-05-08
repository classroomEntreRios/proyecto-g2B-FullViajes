import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
// const emailer=require('../../../config/mailer');
import { MailerService } from 'src/app/services/mailer.service';
import {ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  error = false;
  esperar = false;
  noerror=false;
  mensaje = '';
  
  consultaForm: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    correo: ['',Validators.required],
    consulta: ['', Validators.required],
  });
  

  constructor(private formBuilder: FormBuilder, public service:MailerService, private router:Router) { }

  ngOnInit(): void {
    this.service.clearFormData();
  }
enviar(){
  this.service.formData={
    nombre: this.consultaForm.value.nombre,
    correo: this.consultaForm.value.correo,
    consulta: this.consultaForm.value.consulta
   
  };

 console.log(this.service.formData)
  // emailer.SendMail();
  // this.http.sendEmail("http://localhost:3000/contacto",this.contactoForm).subscribe(
  //   data =>{
  //     let res:any = data;
  //     console.log("OK enviado");
  //   },
  //   err=>{
  //     console.log(err);
  //   }
  // );
  this.service.EnviarContacto(this.service.formData).subscribe(
    res => {
      this.noerror=true;
      this.esperar = false;
      //this.router.navigate(['/principal']);
      this.consultaForm.reset();
    },
    (err:HttpErrorResponse) => {
              
      var MensajeError=err.error.ModelState.Error;
      ;
      console.log(MensajeError);
      this.error=true;
      this.esperar = false;
      this.consultaForm.reset();
      }
  )
}
corregido(){
  this.error=false;
  this.noerror=false;
  this.esperar = false;
}
}
