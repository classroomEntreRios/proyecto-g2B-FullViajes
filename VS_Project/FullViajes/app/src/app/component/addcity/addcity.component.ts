import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { Router } from '@angular/router'; 
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { compileDeclarePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {

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
 

  constructor(private formBuilder: FormBuilder, public service:CiudadesService, private router:Router) { }

  ngOnInit(): void { 
    this.cityForm.reset();  
    this.errorc=false;
    this.coordenadas="";
    this.coordenadasresp="";
  }


onSubmit():void{
  //ARMO EL STRING DE COORDENADAS
  // if (this.cityForm.invalid){this.cityForm.markAllAsTouched();}
  // this.cityForm.reset();
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
 

  this.service.postCiudad(this.service.formData).subscribe(
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