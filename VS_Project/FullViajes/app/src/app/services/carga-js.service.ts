import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargaJsService {

  constructor() { }

  Carga(archivos: string[])
  {
    for (let archivo of archivos)
    {
      let script = document.createElement("script");
      script.src = "./../../assets/Js" + archivo ;
      let div = document.getElementsByTagName("div")[0];
      div.appendChild(script);
    }
  }
  
}