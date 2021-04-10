import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  location = { cityName: 'Parana Entre Ríos', countryCode: 'AR' };
  weather : any;

  constructor(private weatherService: ClimaService) { }

  ngOnInit() {
    this.getWeather(this.location.cityName);
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

  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getWeather(cityName.value);

      cityName.value = '';
    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }


}
