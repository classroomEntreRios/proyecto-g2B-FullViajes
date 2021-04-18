import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-editcity',
  templateUrl: './editcity.component.html',
  styleUrls: ['./editcity.component.css']
})
export class EditcityComponent implements OnInit {
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
    this.service.acceder(this.city_id).subscribe(
      (ciudad: any) => {
        this.city=ciudad;
        this.splitted = this.city.coordenadas.split(" "); 
        this.longit=this.splitted[1].toString();
        this.latit=this.splitted[0].toString();
        this.splitted = this.longit.split("°");
        this.long_grad=this.splitted[0].toString();
        this.longit= this.splitted[1].toString(); 
        this.splitted = this.longit.split("'");
        this.long_min=this.splitted[0].toString();
        this.splitted = this.latit.split("°");
        this.latit_grad=this.splitted[0].toString();
        this.latit= this.splitted[1].toString(); 
        this.splitted = this.latit.split("'");
        this.latit_min=this.splitted[0].toString();
    /*console.log(this.splitted[1].toString())*/
    console.log(this.long_min);
    console.log(this.long_grad);
    console.log(this.latit_min);
    console.log(this.latit_grad);
    this.cityForm.patchValue(
      {
        
        ciudad: this.city.nombre,
        cp:this.city.cp,
        descripcion: this.city.descripcion,
        lat_grad:this.latit_grad,
        //lat_min:this.latit_min,
        //long_min:this.long_min,
        //long_grad:this.long_grad,
      }
    );
      }
    );   
    
    
  }
  onSubmit(){
  
  }
}
