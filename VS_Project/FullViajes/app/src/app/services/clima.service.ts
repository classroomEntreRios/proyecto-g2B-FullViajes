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

  getClimaHistorico(cityName: string, dateStart: string, dateEnd: string){
    // return this.http.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?aggregateHours=24&combinationMethod=aggregate&startDateTime=${dateStart}T00%3A00%3A00&endDateTime=${dateEnd}T00%3A00%3A00&maxStations=-1&maxDistance=-1&contentType=csv&unitGroup=metric&locationMode=single&key=${this.apiKey}&dataElements=default&locations=${cityName}`)
    return this.http.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/${dateStart}/${dateEnd}?unitGroup=metric&key=${this.apiKey}`)
  }
  
}
