import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {
  cityForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
