import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent} from 'rxjs';
import {Ciudad} from './../models/ciudad.model'

@Injectable({
  providedIn: 'root'
})
export class PruebaCiudadService {
formData:Ciudad =new Ciudad;
readonly rootURL = 'https://localhost:44331/api'

  constructor(private http : HttpClient) { }

  postCiudad(formData : Ciudad){
    
    return this.http.post(this.rootURL+'/Ciudad', formData);

  }

  getCiudad(){
    
    return this.http.get(this.rootURL+'/Ciudad');

    

  }


}
