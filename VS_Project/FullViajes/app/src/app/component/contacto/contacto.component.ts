import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router'; 
import { MailerService } from 'src/app/services/mailer.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  errorG=false; 
  noerror=false;
  esperar= false;
  general=true;
  cartel=false;
 
  constructor(public service: MailerService,private router:Router) { }

  
  
    ngOnInit(): void {
      this.resetForm();
    }
  
    resetForm(form?: NgForm) {
      if (form != null)
        form.resetForm();
      //quitar los alerts ya que aparecen al vaciar todo
      this.errorG=false; 
 
      this.noerror=false;
      this.esperar= false;
      this.general=false;
      this.service.formData = {
        nombre: '',
        correo: '',
        consulta: '',
      };
    }
  
     onSubmit(form: NgForm) {
      this.errorG=false; 
      this.esperar = true;
      this.noerror = false; 
      this.insertRecord(form);

    }
  
    insertRecord(form : NgForm){
      this.service.EnviarContacto(this.service.formData).subscribe(
        res => {
          this.noerror=true;
          this.esperar = false;
          //this.router.navigate(['/principal']);
        },
        (err:HttpErrorResponse) => {
                  
          var MensajeError=err.error.ModelState.Error;
          ;
          console.log(MensajeError);
          this.errorG=true;
          this.esperar = false;
          }
      )
  }
    corregido(){
      this.errorG=false; 
      this.esperar = false;
      this.noerror = false;
    }
  }
  
  