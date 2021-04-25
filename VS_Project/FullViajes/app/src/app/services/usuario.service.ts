import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Injectable } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  oRes = '';
  //user_id='';
  formData: Usuario = new Usuario;
  readonly rootURL = 'https://fullviajesdemo.azurewebsites.net/api'
  //readonly rootURL = 'https://localhost:44331/api'
  constructor(private http: HttpClient) { }

  postUsuario(formData: Usuario) {
    return this.http.post(this.rootURL + '/Users/register', formData);
  }
  postUser(formData: Usuario) {
    return this.http.post(this.rootURL + '/Users/adduser', formData);
  }
  editUser(formData:Usuario, user_id: string){
    return this.http.post(this.rootURL + '/Users/editar/'+ user_id, formData);
  }
  login(formData: Usuario) {
    return this.http.post(this.rootURL + '/Acceso/Login', formData);
  }
  acceder(user_id: string) {
    return this.http.get(this.rootURL + '/Users/GetUsuario/' + user_id)
  }

  chau(token: string) {
    return this.http.get(this.rootURL + '/Acceso/Logout?token=' + token)
  }
  listar() {
    return this.http.get(this.rootURL + '/Users/GetUsuario')
  }
  clearFormData() {
    this.formData = {
      nickname: "",
      nombre: "",
      apellido: "",
      password: "",
      user_foto: "/img/profile.png",
      active: true,
      token: "",
      email: "",
      rol: 1,
      user_descripcion: ""
    };
  }
}