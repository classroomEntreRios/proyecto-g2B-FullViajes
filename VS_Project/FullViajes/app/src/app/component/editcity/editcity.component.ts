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
    latnordsud: ['', Validators.required],
    lat_grad: ['', Validators.required,Validators.pattern("/^[0-9]+$/")],
    lat_min: ['', Validators.required,Validators.pattern("/^[0-9]+$/")],
    longeo: ['', Validators.required],
    long_grad: ['', Validators.required,Validators.pattern("/^[0-9]+$/")],
    long_min: ['', Validators.required,Validators.pattern("/^[0-9]+$/")],     
    descripcion: ['', Validators.required],
    menu: false
  });
  errorc=false;
  coordenadas="";
  coordenadasresp="";
  // a cambiar
  latnordsud="";
  coordenadasrecibida:any;
  lat_grad="";
  lat_min="";
  longeo="";
  long_grad="";
  long_min="";
// fin a cambiar


  // city:any;
  // splitted:any;
  // longit:string="";
  // long_grad:string="";
  // long_min:string="";
  // latit:string="";
  // latit_grad:string="";
  // latit_min:string="";


  constructor(private formBuilder: FormBuilder,public service: CiudadesService, private router: Router, private _route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.cityForm.reset();  
    this.errorc=false;
    this.coordenadas="";
    this.coordenadasresp="";
    this.city_id = this._route.snapshot.paramMap.get('id')!;
    this.service.acceder(this.city_id).subscribe(
      (ciudad: any) => {
// <<<<<<< HEAD
        this.service.formData=ciudad;
        this.coordenadasrecibida=this.service.formData.coordenadas.split(" ");
        this.latnordsud=this.coordenadasrecibida[1].toString();
        this.longeo=this.coordenadasrecibida[0].toString();
        this.coordenadasrecibida=this.latnordsud.split("°");
        this.lat_grad=this.coordenadasrecibida[0].toString();
        this.latnordsud=this.coordenadasrecibida[1].toString();
        this.coordenadasrecibida=this.latnordsud.split("'");
        this.lat_min=this.coordenadasrecibida[0].toString();
        this.latnordsud=this.coordenadasrecibida[1].toString();
        this.latnordsud=this.latnordsud.substr(-1);
        this.coordenadasrecibida=this.longeo.split("°");
        this.long_grad=this.coordenadasrecibida[0].toString();
        this.longeo=this.coordenadasrecibida[1].toString();
        this.coordenadasrecibida=this.longeo.split("'");
        this.long_min=this.coordenadasrecibida[0].toString();
        this.longeo=this.coordenadasrecibida[1].toString();
        this.longeo=this.longeo.substr(-1);

        this.cityForm.value.lat_grad=this.lat_grad;
     

// =======
    //     this.city=ciudad;
    //     this.splitted = this.city.coordenadas.split(" "); 
    //     this.longit=this.splitted[1].toString();
    //     this.latit=this.splitted[0].toString();
    //     this.splitted = this.longit.split("°");
    //     this.long_grad=this.splitted[0].toString();
    //     this.longit= this.splitted[1].toString(); 
    //     this.splitted = this.longit.split("'");
    //     this.long_min=this.splitted[0].toString();
    //     this.splitted = this.latit.split("°");
    //     this.latit_grad=this.splitted[0].toString();
    //     this.latit= this.splitted[1].toString(); 
    //     this.splitted = this.latit.split("'");
    //     this.latit_min=this.splitted[0].toString();
    // /*console.log(this.splitted[1].toString())*/
    // console.log(this.long_min);
    // console.log(this.long_grad);
    // console.log(this.latit_min);
    // console.log(this.latit_grad);
    // this.cityForm.patchValue(
    //   {
        
    //     ciudad: this.city.nombre,
    //     cp:this.city.cp,
    //     descripcion: this.city.descripcion,
    //     //lat_grad:this.latit_grad,
    //     lat_min:this.latit_min,
    //     long_min:this.long_min,
    //     long_grad:this.long_grad,
// >>>>>>> 33f7c7a3e34026468929d65a91c2532a5f178c25
   
      }
    );   
    
    
  }

  onSubmit():void{

    this.coordenadas=this.cityForm.value.lat_grad+"°"+this.cityForm.value.lat_min+"'"+this.cityForm.value.latnordsud+" "+ this.cityForm.value.long_grad+"°"+this.cityForm.value.long_min+"'"+this.cityForm.value.longeo;
    this.coordenadasresp=this.cityForm.value.lat_grad+"°"+this.cityForm.value.lat_min+"'"+this.cityForm.value.latnordsud+" "+ this.cityForm.value.long_grad+"°"+this.cityForm.value.long_min+"'"+this.cityForm.value.longeo;
  
    this.errorc=false;
    this.service.clearFormData();
  
   this.service.formData={
      nombre: this.cityForm.value.ciudad,
      cp: this.cityForm.value.cp,
      coordenadas: this.coordenadas,
      descripcion: this.cityForm.value.descripcion,
      menu:false
    };
    
  
  console.log(this.service.formData);
  this.insertRecord();
    
  }
  insertRecord(){
   
  
    this.service.editar(this.service.formData,this.city_id).subscribe(
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
  
  
  // solonumero(supuestonumero:any) {
  //   return /^[0-9]+$/gi.test(supuestonumero);
  // };

  
  corregido(){
    this.errorc=false;
    this.coordenadasresp="";
  }
  }