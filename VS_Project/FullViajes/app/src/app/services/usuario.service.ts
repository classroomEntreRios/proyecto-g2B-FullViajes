import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import {Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent} from 'rxjs';
//import { Usuario } from 'rxjs/Usuario';
import 'rxjs/add/Observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';


// import {IEmployee} from './employee'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  formData: Usuario = new Usuario;
  readonly rootURL = 'https://localhost:44331/api'

  constructor(private http : HttpClient) { }




  postUsuario(formData : Usuario){
    
    return this.http.post(this.rootURL+'/Users', formData);

    

    // .map((res)=>this.errorHandler);
  }

  getUsuario(){
    
    return this.http.get(this.rootURL+'/Users');

    

    // .map((res)=>this.errorHandler);
  }




  // errorHandler(errorResponse: HttpErrorResponse){
  //   if(errorResponse.error instanceof ErrorEvent)
  //   {
  //     console.error('Error del lado del Cliente: ', errorResponse.error.message);
  //   }else{
  //     console.error('Error del lado del Servidor : ', errorResponse.error.message);

  //   }

  //   return Observable.throw(errorResponse.message  || "Server Error");
  //   //return new ErrorObservable('Hay un problema con el servicio. Lo notificaremos y trabajaremos');
    
  // }



  


}
