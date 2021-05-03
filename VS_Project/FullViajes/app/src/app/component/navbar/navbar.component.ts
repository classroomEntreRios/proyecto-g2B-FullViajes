import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cities:any;
  constructor(public service: CiudadesService, private router: Router) { }

  ngOnInit(): void {
    this.service.listarmenu().subscribe(
      (city: any) => {
        this.cities=city;
      }
    );
  }

}
