import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CiudadesService } from 'src/app/services/ciudades.service';
import {ActivatedRoute, Router } from '@angular/router'; 
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { compileDeclarePipeFromMetadata } from '@angular/compiler';


@Component({
  selector: 'app-editcity',
  templateUrl: './editcity.component.html',
  styleUrls: ['./editcity.component.css']
})
export class EditcityComponent implements OnInit {

  city_id="";
  cityForm: FormGroup = this.formBuilder.group({
    ciudad: ['', Validators.required],
    cp: ['', Validators.required],
    coordenadas: ['', Validators.required], 
    descripcion: ['', Validators.required],
    menu: ['', Validators.required],
    id_ciudad:""
  });
  errorformato=false;
  errorc=false;

  errorG=false; 
 

  // cityForm!: FormGroup;
  city:any;
 



  splitted:any;
   longit:string="";
   long_grad:number=0;
   long_min:number=0;
   latit:string="";
   latit_grad:number=0;
   latit_min:number=0;

  constructor(private formBuilder: FormBuilder,public service: CiudadesService, private router: Router, private _route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.cityForm.reset();  
    this.errorc=false;
    this.city_id = this._route.snapshot.paramMap.get('id')!;
    this.errorc=false;
    this.errorG=false;   
    this.service.acceder(this.city_id).subscribe(
      (ciudad: any) => {

        this.city=ciudad;
        if(ciudad.menu==1)
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
      },
      (err:HttpErrorResponse) => {this.errorG=true; }
    );   

    
    
  }
  onSubmit():void{
    this.errorc=false;
    this.errorG=false; 
    this.service.clearFormData();
    // IMPRIME PARA COMPROBAR LAS COORDENADAS
    // console.log(this.cityForm.value.coordenadas);
    // console.log((this.validarcoordenadas(this.cityForm.value.coordenadas)));
    
     if(this.validarcoordenadas(this.cityForm.value.coordenadas)){

      if(this.cityForm.value.menu==0)
        {this.service.formData={menu:true,
          nombre: this.cityForm.value.ciudad,
          cp: this.cityForm.value.cp,
          coordenadas: this.cityForm.value.coordenadas,
          descripcion: this.cityForm.value.descripcion,
          id_ciudad:this.cityForm.value.id_ciudad}}
          else{
         this.service.formData={
          nombre: this.cityForm.value.ciudad,
          cp: this.cityForm.value.cp,
          coordenadas: this.cityForm.value.coordenadas,
          descripcion: this.cityForm.value.descripcion,
          menu:false,
          id_ciudad:this.cityForm.value.id_ciudad};
     };
    this.ModificarCiudad();
    }else{ this.errorformato=true;};
  }


  ModificarCiudad(){
 

    this.service.Editar(parseInt(this.city_id), this.service.formData).subscribe(

      res => {
        //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
        this.router.navigate(['/admcitys']);
        this.cityForm.reset();
      },

      (err:HttpErrorResponse) => {     
        var MensajeError=err.error.message;
 
        if (MensajeError=="LAS COORDENADAS YA SE ENCUENTRA EN LA BASE DE DATOS")
            {
                this.errorc=true;                
            }
            else
            {
                {this.errorG=true; 
                }
            }
            //this.router.navigate(['/addcity']);
        }
    )

  

  }

// VALIDA LAS COORDENADAS
  validarcoordenadas(cadena:string){
    var er2=/^[0-9]{1,2}[°]{1}[0-9]{1,2}[']{1}[SN]{1}[ ]{1}[0-9]{1,2}[°]{1}[0-9]{1,2}[']{1}[EO]{1}$/;
    var rta2=er2.test(cadena);
    if (rta2==false){this.errorformato=true;return false;} else{ return true;}
    }
// VALIDA COORDENADAS, DENTRO DEL RANGO DE LATITUD Y LONGITUD
// validarcoordenadas(x:string){ 
       
//         if(x.search(" ")==-1){this.errorformato=true;return false;}
//         this.splitted = x.split(" ");       
//         this.longit=this.splitted[1].toString();
//         this.latit=this.splitted[0].toString();
//         if(this.longit.search("°")==-1){this.errorformato=true;return false;}
//         this.splitted = this.longit.split("°");
//         this.long_grad=parseInt(this.splitted[0].toString());
//         this.longit= this.splitted[1].toString(); 
//         if(this.longit.search("'")==-1){this.errorformato=true;return false;}
//         this.splitted = this.longit.split("'");
//         this.long_min=parseInt(this.splitted[0].toString());
//         this.longit=this.splitted[1].toString();

//         if(this.latit.search("°")==-1){this.errorformato=true;return false;}
//         this.splitted = this.latit.split("°");
//         this.latit_grad=parseInt(this.splitted[0].toString());
//         this.latit= this.splitted[1].toString(); 
//         if(this.latit.search("'")==-1){this.errorformato=true;return false;}
//         this.splitted = this.latit.split("'");
//         this.latit_min=parseInt(this.splitted[0].toString());
//         this.latit=this.splitted[1].toString();

//         if(this.longit!="E" && this.longit!="O"){
//           this.errorformato=true;return false;
//         };
//         if(this.latit!="S" && this.latit!="N"){
//           this.errorformato=true;return false;
//         };
//         if((-180 > this.long_grad) || (this.long_grad >180))
//                 {this.errorformato=true;return false;}
//             else
//                 {if((-180 > this.long_min) || (this.long_min > 180))
//                   {{this.errorformato=true;return false;}}

//                 }
//         if((-90 > this.latit_grad) || (this.latit_grad>90))
//                 {this.errorformato=true;return false;}
//             else
//                 {if((-90 > this.latit_min) || (this.latit_min>90))
//                   {{this.errorformato=true;return false;}}

//                 }

//    return true;
//   }




  corregido(){
    this.errorformato=false;
    this.errorc=false;
    this.errorG=false;

  }


}

