import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  CargaScript(archivos: string[])
  {
    for (let archivo of archivos)
    {
      let script = document.createElement("script");
      script.src = "./assets/ScriptsJS/" + archivo ;
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
}
