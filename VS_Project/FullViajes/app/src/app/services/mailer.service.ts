import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Consulta} from '../models/consulta.model';



@Injectable({
  providedIn: 'root'
})
export class MailerService {
  //readonly rootURL = 'https://localhost:44331/api'
  readonly rootURL = 'https://fullviajesdemo.azurewebsites.net/api';
  formData: Consulta = new Consulta;
  
  constructor(private http: HttpClient) { }
  clearFormData(){
    this.formData={
      nombre: "",
      correo: "",
      consulta: "",
    };
  }
  EnviarContacto(formData: Consulta) {
    return this.http.post(this.rootURL + '/Mailer/EnviarContacto',formData);
  }
}
