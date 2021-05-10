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
  status='';
  rol='';
  

  constructor(public service: CiudadesService, private router: Router) { }

  ngOnInit(): void {
    this.status = localStorage.getItem('resultado')!;
    this.rol = localStorage.getItem('rol')!;
    if (parseInt(this.status)==0){
      this.router.navigate(['/usuario']);
    }else{
      if (parseInt(this.rol)==1){
        this.router.navigate(['/levelaccess']);
      }
    }
    this.service.listar().subscribe(
      (city: any) => {
        this.cities=city;
      }
    );
  }

}
