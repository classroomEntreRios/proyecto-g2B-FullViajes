import { HttpClient } from '@angular/common/http';
import { Ciudad } from '../models/ciudades.model'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  formData: Ciudad = new Ciudad;
  readonly rootURL = 'https://localhost:44331/api'
  constructor(private http: HttpClient) { }

  postCiudad(formData: Ciudad) {
    return this.http.post(this.rootURL + '/Ciudades/register', formData);
  }
  acceder(ciudad_id: string){
    return this.http.get(this.rootURL + '/Ciudades/GetCiudad/'+ ciudad_id)
  }
 listar(){
   return this.http.get(this.rootURL+ '/Ciudades/GetCiudad')
 }
}