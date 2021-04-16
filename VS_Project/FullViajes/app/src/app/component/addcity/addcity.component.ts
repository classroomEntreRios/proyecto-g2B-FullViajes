import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {
  cityForm!: FormGroup;
  errorc=false;
  coordenadas="";
  coor1="";
  coor2="";
  coor3="";
  coor4="";
  coordenadasresp="";
 

  constructor(private formBuilder: FormBuilder, public service:CiudadesService) { }

  ngOnInit(): void {
    this.cityForm = this.formBuilder.group({
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
    
  }


submit(){
  //ARMO EL STRING DE COORDENADAS
  this.coordenadas=this.cityForm.value.lat_grad+"°"+this.cityForm.value.lat_min+"'"+this.cityForm.value.latnordsud+" "+ this.cityForm.value.long_grad+"°"+this.cityForm.value.long_min+"'"+this.cityForm.value.longeo;


  this.service.formData={
    nombre: this.cityForm.value.ciudad,
    cp: this.cityForm.value.cp,
    coordenadas: this.coordenadas,
    descripcion: this.cityForm.value.descripcion,
    menu:false
  };
  

console.log(this.cityForm.value);


this.coordenadas=this.cityForm.value.lat_grad+"°"+this.cityForm.value.lat_min+"'"+this.cityForm.value.latnordsud+" "+ this.cityForm.value.long_grad+"°"+this.cityForm.value.long_min+"'"+this.cityForm.value.longeo;

  
}

solonumero(supuestonumero:any) {
  return /^[0-9]+$/gi.test(supuestonumero);
};

corregido(){
  this.errorc=false;
}
}
