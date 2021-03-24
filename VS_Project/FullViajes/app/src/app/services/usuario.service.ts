import { HttpClient } from '@angular/common/http';
import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';

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
}
