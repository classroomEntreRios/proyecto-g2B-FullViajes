import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-citiesview',
  templateUrl: './citiesview.component.html',
  styleUrls: ['./citiesview.component.css']
})
export class CitiesviewComponent implements OnInit {
  city_id="";
  city:any;

  constructor(public service: CiudadesService, private router: Router, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.city_id = this._route.snapshot.paramMap.get('id')!;
    this.service.acceder(this.city_id).subscribe(
      (ciudad: any) => {
      this.city=ciudad
      }
    );
  }

}
