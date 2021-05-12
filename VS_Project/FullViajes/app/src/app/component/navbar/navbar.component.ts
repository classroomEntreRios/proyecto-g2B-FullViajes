import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cities:any;
  url:any="";
  urlfinal="/city/";
  constructor(public service: CiudadesService, private router: Router) { }

  ngOnInit(): void {
    this.service.listarmenu().subscribe(
      (city: any) => {
        this.cities=city;
      }
    );
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
  };
  
  this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
          this.router.navigated = false;
          window.scrollTo(0, 0);
      }
  });
  }


}
