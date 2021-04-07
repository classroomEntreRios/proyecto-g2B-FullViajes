import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Injectable } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  oRes='';
  formData: Usuario = new Usuario;
  readonly rootURL = 'https://localhost:44331/api'
  constructor(private http: HttpClient) { }

  register(formData : Usuario){
    return this.http.post(this.rootURL+'/Users/register', formData);
  }

  getUsuario(){
    return this.http.get(this.rootURL+'/Users/register');
  }

/*  accederUsuario(formData: Usuario) {
    return this.http.post(this.rootURL + '/Acceso/Login', formData);
        console.log(this.oRes);
  }*/
  login(formData:Usuario) {
    return this.http.post(this.rootURL + '/Acceso/Login', formData);
  }
  /*Login(model: any) {
    debugger;
    var a = this.rootURL + 'UserLogin';
    return this.http.post<any>(this.rootURL + 'UserLogin', model);
  }*/
}