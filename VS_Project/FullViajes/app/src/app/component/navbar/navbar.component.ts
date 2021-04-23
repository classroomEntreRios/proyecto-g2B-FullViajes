import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id_ciudad="";
  nombre="";
  ciudades:any;

  constructor(public service: CiudadesService, private router: Router) { }

  ngOnInit(): void {
    this.service.listarMenu().subscribe(
      (city: any) => {
        this.ciudades=city;
       }
    );
  
}
}
