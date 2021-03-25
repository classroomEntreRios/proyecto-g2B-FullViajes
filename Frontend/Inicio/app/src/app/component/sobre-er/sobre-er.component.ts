import { Component, OnInit } from '@angular/core';
import {CargaJsService}  from './../../Services/carga-js.service';
 
@Component({
  selector: 'app-sobre-er',
  templateUrl: './sobre-er.component.html',
  styleUrls: ['./sobre-er.component.css']
})
export class SobreERComponent implements OnInit {

  constructor( private cargaScript:CargaJsService){

    cargaScript.Carga(["sobre-er/Cards.Js"]);
    
  }

  ngOnInit(): void {
  }

}
