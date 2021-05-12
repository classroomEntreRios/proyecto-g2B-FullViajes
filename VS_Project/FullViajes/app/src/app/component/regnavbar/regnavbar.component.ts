import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-regnavbar',
  templateUrl: './regnavbar.component.html',
  styleUrls: ['./regnavbar.component.css']
})
export class RegnavbarComponent implements OnInit {
  Username = '';
  imgperfil='';
  cities:any;


  constructor(public service: CiudadesService, private router: Router) { }

  ngOnInit(): void {
    this.service.listarmenu().subscribe(
      (city: any) => {
        this.cities=city;
      }
    );
      this.Username = localStorage.getItem('nickname')!;
      this.imgperfil = localStorage.getItem('imgperfil')!;
      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
            this.router.navigated = false;
            window.scrollTo(0, 0);
        }
    });
  }

}
