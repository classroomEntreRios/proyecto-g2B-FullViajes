import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { compileDeclarePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-editcity',
  templateUrl: './editcity.component.html',
  styleUrls: ['./editcity.component.css']
})
export class EditcityComponent implements OnInit {
  cityForm: FormGroup = this.formBuilder.group({
    ciudad: ['', Validators.required],
    cp: ['', Validators.required],
    coordenadas: ['', Validators.required], 
    descripcion: ['', Validators.required],
    menu: ['', Validators.required],
    id_ciudad:""
  });
  regex = "/^[0-9]*$/";
  errorformato=false;
  errorc=false;
  coordenadas="";
  coordenadasI="";
  coordenadasresp="";
  // cityForm!: FormGroup;
  city:any;
  city_id="";



  splitted:any;
   longit:string="";
   long_grad:string="";
   long_min:string="";
   latit:string="";
   latit_grad:string="";
   latit_min:string="";

  constructor(private formBuilder: FormBuilder,public service: CiudadesService, private router: Router, private _route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.city_id = this._route.snapshot.paramMap.get('id')!;
    this.errorc=false;
    this.coordenadas="";
    
    this.coordenadasresp="";
    this.service.acceder(this.city_id).subscribe(
      (ciudad: any) => {
        this.city=ciudad;
        if(ciudad.menu==true)
        {
        this.cityForm.patchValue({menu:'0'})
        }
        else
        {
        this.cityForm.patchValue({menu:'1'});
        }
      this.cityForm.patchValue(
      {
        
        ciudad: this.city.nombre,
        cp:this.city.cp,
        descripcion: this.city.descripcion,
        coordenadas:this.city.coordenadas,
        id_ciudad:this.city.id_ciudad
      }
    );
      }
    );   
    
    
  }
  onSubmit():void{
    this.errorc=false;
    this.service.clearFormData();
     this.service.formData={
       nombre: this.cityForm.value.ciudad,
       cp: this.cityForm.value.cp,
       coordenadas: this.coordenadas,
       descripcion: this.cityForm.value.descripcion,
       menu:this.cityForm.value.menu
     };
     console.log(this.service.formData);
    this.ModificarCiudad();
  }

  ModificarCiudad(){
 

    this.service.Editar(this.service.formData).subscribe(
      res => {
        //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
        this.router.navigate(['/admcitys']);
        this.cityForm.reset();
      },
      (err:HttpErrorResponse) => {
                
        var MensajeError=err.error.ModelState.Error;
        ;
        console.log(MensajeError);
        if (MensajeError=="LAS COORDENADAS YA SE ENCUENTRA EN LA BASE DE DATOS")
            {
                this.errorc=true;
                this.coordenadas="";
                this.cityForm.reset();
                // this.cityForm.value.lat_grad="";
                // this.cityForm.value.lat_min="";
                // this.cityForm.value.long_grad="";
                // this.cityForm.value.long_min="";
                
                
            }
            else
            {
                {console.log('algo malio sal');
                this.cityForm.reset();
                  //MOSTRAR UN ERROR GENERAL POR FORMULARIO INVALIDO
                  //this.resetForm();
                  //this.router.navigate(['/usuario']);
                }
            }
            this.router.navigate(['/addcity']);
        }
    )
  
  }

  validarcoordenadas(x:string){ 
       console.log(x)
        this.splitted = x.split(" "); 
        this.longit=this.splitted[1].toString();
        this.latit=this.splitted[0].toString();
        this.splitted = this.longit.split("°");
        this.long_grad=this.splitted[0].toString();
        this.longit= this.splitted[1].toString(); 
        this.splitted = this.longit.split("'");
        this.long_min=this.splitted[0].toString();
        this.longit=this.splitted[1].toString();

        this.splitted = this.latit.split("°");
        this.latit_grad=this.splitted[0].toString();
        this.latit= this.splitted[1].toString(); 
        this.splitted = this.latit.split("'");
        this.latit_min=this.splitted[0].toString();
        this.latit=this.splitted[1].toString();

        console.log(this.longit);
        console.log(this.long_grad);
        console.log(this.long_min);
        console.log(this.latit);
        console.log(this.latit_grad);
        console.log(this.latit_min);
  

   this.errorformato=true;
  }



  
  corregido(){
    this.errorc=false;
    this.coordenadasresp="";
  }
}
