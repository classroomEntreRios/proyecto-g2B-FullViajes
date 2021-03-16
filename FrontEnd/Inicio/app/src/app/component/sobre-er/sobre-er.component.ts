import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './../../cargar-scripts.service';
 
@Component({
  selector: 'app-sobre-er',
  templateUrl: './sobre-er.component.html',
  styleUrls: ['./sobre-er.component.css']
})
export class SobreERComponent implements OnInit {

  /*constructor( private _CargaScripts:CargarScriptsService ) { 
   _CargaScripts.Carga(["Card.js"]);
  }*/

  ngOnInit(): void {
  }

}
