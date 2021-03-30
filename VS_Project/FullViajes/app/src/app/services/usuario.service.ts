import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import {Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  formData: Usuario = new Usuario;
  readonly rootURL = 'https://localhost:44331/api'

  constructor(private http : HttpClient) { }




  postUsuario(formData : Usuario){
    
    return this.http.post(this.rootURL+'/Users', formData);

    

  
  }

  getUsuario(){
    
    return this.http.get(this.rootURL+'/Users');

    

  }







  


}
