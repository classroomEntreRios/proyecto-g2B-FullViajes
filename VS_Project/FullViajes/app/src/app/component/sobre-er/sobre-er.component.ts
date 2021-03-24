import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from './../../services/cargar-scripts.service';

@Component({
  selector: 'app-sobre-er',
  templateUrl: './sobre-er.component.html',
  styleUrls: ['./sobre-er.component.css']
})
export class SobreErComponent implements OnInit {

  //constructor(private cargaScript: CargarScriptsService) { 
    //cargaScript.CargaScript(['sobre-er/Card.js']);
 // }

  ngOnInit(): void {
  }

}
