import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import {HttpClient} from '@angular/common/http';
import { from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  formData: Usuario;

  readonly rootURL = 'https://localhost:44331/api'
  constructor(private http : HttpClient) { }

  postUsuario(formData: Usuario){
    return this.http.post(this.rootURL + '/UsuariosWebApi', formData)
  }


}
