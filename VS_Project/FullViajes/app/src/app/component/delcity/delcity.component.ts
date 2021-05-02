import { Component, OnInit } from '@angular/core';
import { CiudadesService } from 'src/app/services/ciudades.service';
import {ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-delcity',
  templateUrl: './delcity.component.html',
  styleUrls: ['./delcity.component.css']
})
export class DelcityComponent implements OnInit {
  city_id="";
  city:any;
  errorG=false;
  errorc=true;

  constructor(public service: CiudadesService, private router: Router, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.errorc=false;
    this.errorG=false;
     this.city_id = this._route.snapshot.paramMap.get('id')!;
     this.service.acceder(this.city_id).subscribe(
        (ciudad: any) => {this.city=ciudad;},
          (err:HttpErrorResponse) => { var MensajeError=err.error.message;
            if (MensajeError=="LA CIUDAD NO SE ENCUENTRA EN LA BASE DE DATOS")
          {
              this.errorc=true;                
          }
          else
          {
              this.errorG=true; 
              
          } 
        }
          );
  }
eliminar(){
  this.service.DeleteCiudad(parseInt(this.city_id)).subscribe(
    (ciudad: any) => {
      this.router.navigate(['/admcitys']);},
        
        (err:HttpErrorResponse) => { var MensajeError=err.error.message;
 
        if (MensajeError=="LA CIUDAD NO SE ENCUENTRA EN LA BASE DE DATOS")
            {
                this.errorc=true;                
            }
            else
            {
                this.errorG=true; 
                
            } 
          }
          );  
    };
}


 



 


   