import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-regnavbar',
  templateUrl: './regnavbar.component.html',
  styleUrls: ['./regnavbar.component.css']
})
export class RegnavbarComponent implements OnInit {
  Username = '';
  imgperfil='';
  id_ciudad="";
  nombre="";
  ciudades:any;


  constructor(public service: CiudadesService, private router: Router) { }

  ngOnInit(): void {
      this.Username = localStorage.getItem('nickname')!;
      this.imgperfil = localStorage.getItem('imgperfil')!;
      this.service.listarMenu().subscribe(
        (city: any) => {
          this.ciudades=city;
         }
      );
  }

}