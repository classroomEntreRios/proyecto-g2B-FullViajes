import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  apiKey: string = 'PUZYPGRF29CQYT4DPT8GGDTEE';
  URIvisualCrossing = '';

  constructor(private http: HttpClient) {
    this.URIvisualCrossing = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Parana%2C%20E%2C%20AR?unitGroup=metric&key=${this.apiKey}&include=current`
  }

  getClima(cityName: string) {
    return this.http.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${this.apiKey}`)
  }
  
}
