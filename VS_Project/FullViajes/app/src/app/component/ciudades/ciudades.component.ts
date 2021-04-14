import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
  cities:any;

  constructor(public service: CiudadesService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().subscribe(
      (city: any) => {
        this.cities=city;
      }
    );
  }

}
