import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-citiesview',
  templateUrl: './citiesview.component.html',
  styleUrls: ['./citiesview.component.css']
})
export class CitiesviewComponent implements OnInit {
  city_id="";
  city:any;
  weather:any;

  constructor(public service: CiudadesService, private router: Router, private _route:ActivatedRoute, private weatherService: ClimaService) { }

  ngOnInit(): void {
    this.city_id = this._route.snapshot.paramMap.get('id')!;
    this.service.acceder(this.city_id).subscribe(
      (ciudad: any) => {
      this.city=ciudad;
      this.getWeather(this.city.nombre);
      }
    );
    
  }

  getWeather(cityName: string) {
    this.weatherService
      .getClima(cityName)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
      
  }

}
