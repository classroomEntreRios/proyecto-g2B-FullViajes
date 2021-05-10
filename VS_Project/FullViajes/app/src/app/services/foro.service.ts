import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reply } from '../models/reply.model';
import { Topicos } from '../models/topics.model';

@Injectable({
  providedIn: 'root'
})
export class ForoService {
  formData: Topicos = new Topicos;
  formResp: Reply = new Reply;
  readonly rootURL = 'https://fullviajesdemo.azurewebsites.net/api'
  //readonly rootURL = 'https://localhost:44331/api'

  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get(this.rootURL + '/Foro/GetTopicos')
  }
  postTema(formData: Topicos) {
    return this.http.post(this.rootURL + '/Foro/PostTopicos', formData);
  }
  postReply(formResp: Reply) {
    return this.http.post(this.rootURL + '/Reply/PostRespuestas', formResp);
  }
  acceder(topic_id: string) {
    return this.http.get(this.rootURL + '/Foro/GetTopicos/' + topic_id)
  }
}
