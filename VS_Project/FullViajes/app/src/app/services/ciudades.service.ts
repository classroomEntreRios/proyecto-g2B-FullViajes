import { HttpClient } from '@angular/common/http';
import { Ciudad } from '../models/ciudades.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
 
  formData: Ciudad = new Ciudad;
  readonly rootURL = 'https://localhost:44331/api'
  //readonly rootURL = 'https://fullviajesdemo.azurewebsites.net/api'
  constructor(private http: HttpClient) { }

  clearFormData(){
    this.formData={
      nombre: "",
      cp: "",
      coordenadas: "",
      descripcion: "",
      menu:false,
    };
  }
  postCiudad(formData: Ciudad) {
    return this.http.post(this.rootURL + '/Ciudades/register',  formData);
  }
  Editar(id:number, formData: Ciudad) {
    return this.http.put(this.rootURL + '/Ciudades/putCiudad/'+ id, formData);
  }
  acceder(ciudad_id: string){
    return this.http.get(this.rootURL + '/Ciudades/GetCiudad/'+ ciudad_id)
  }
  editar(formData:Ciudad, id: any){return this.http.post(this.rootURL + '/Ciudades/editar', formData, id);

  }
 listar(){
   return this.http.get(this.rootURL+ '/Ciudades/GetCiudad')
 }
 listarmenu(){
  return this.http.get(this.rootURL+ '/Ciudades/GetCiudades')
}
DeleteCiudad(id:number){
  return this.http.delete(this.rootURL+ '/Ciudades/DeleteCiudad/'+id);
}


}