import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-climahistorico',
  templateUrl: './climahistorico.component.html',
  styleUrls: ['./climahistorico.component.css']
})
export class ClimahistoricoComponent implements OnInit {
  location = { cityName: 'Parana Entre Ríos', countryCode: 'AR' };
  weather: any;

  constructor(private weatherService: ClimaService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    // this.getWeatherHistorical('Parana', '2021-04-2', '2021-04-10')
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

  getWeatherHistorical(cityName: string, dateStart: string, dateEnd: string) {
    this.weatherService
      .getClimaHistorico(cityName, dateStart, dateEnd)
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

  submitHistorico(cityName: HTMLInputElement, dateStart: HTMLInputElement, dateEnd: HTMLInputElement) {
    if (cityName.value && dateStart.value && dateEnd.value) {

      var dias = [];

      const _MS_PER_DAY = 1000 * 60 * 60 * 24;

      // Funcion para calcular la diferencia entre fechas en dias
      function dateDiffInDays(a: Date, b: Date) {

        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
      }


      // Acá llama a la función para sacar la diferencia de dias entre fechas elegidas
      const a = new Date(dateStart.value),
        b = new Date(dateEnd.value),
        difference = dateDiffInDays(a, b);

      // A la dateStart le agrega cuatro dias más que es lo que permite calcular la API
      var dateFourDays = new Date(dateStart.value);
      dateFourDays.setDate(dateFourDays.getDate() + 4);

      this.datePipe.transform(dateStart.value, "yyyy-mm-dd");
      this.datePipe.transform(dateEnd.value, "yyyy-mm-dd");
      this.getWeatherHistorical(cityName.value, dateStart.value, formatDATE(dateFourDays));

      if (difference >= 5) {
        alert("Solo es hasta 4 días de rango, consultar Visual Crossing")
      }




      cityName.value = '';
    } else {
      alert('Porfavor ingrese los valores')
    }
    cityName.focus();
    return false;
  }




}

function formatDATE(date: Date) {
  var mm = date.getMonth() + 1;
  var dd = date.getDate();
  var yy = date.getFullYear();
  if (mm <= 9 && dd <= 9) {
    var myDateString = yy + '-0' + mm + '-0' + dd;
  } else if (mm <= 9) {
    var myDateString = yy + '-0' + mm + '-' + dd;
  } else if (dd <= 9) {
    var myDateString = yy + '-' + mm + '-0' + dd;
  } else {
    var myDateString = yy + '-' + mm + '-' + dd; //(US)
  }

  return myDateString;
}
