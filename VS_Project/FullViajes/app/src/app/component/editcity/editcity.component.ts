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
  cityForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,public service: CiudadesService, private router: Router, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cityForm = this.formBuilder.group({
      ciudad: ['', Validators.required],
      cp: ['', Validators.required],
      latnordsud: ['', Validators.required],
      lat_grad: ['', Validators.required],
      lat_min: ['', Validators.required],
      longeo: ['', Validators.required],
      long_grad: ['', Validators.required],
      long_min: ['', Validators.required],     
      descripcion: ['', Validators.required],
      menu: false
    });
  }
  enviarTodo(){
  
  }
}
