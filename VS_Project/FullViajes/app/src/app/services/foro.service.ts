import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topicos } from '../models/topics.model';

@Injectable({
  providedIn: 'root'
})
export class ForoService {
  formData: Topicos = new Topicos;
  //readonly rootURL = 'https://fullviajesdemo.azurewebsites.net/api'
  readonly rootURL = 'https://localhost:44331/api'

  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get(this.rootURL + '/Foro/GetTopicos')
  }
  postTema(formData: Topicos) {
    return this.http.post(this.rootURL + '/Foro/PostTopicos', formData);
  }
}
