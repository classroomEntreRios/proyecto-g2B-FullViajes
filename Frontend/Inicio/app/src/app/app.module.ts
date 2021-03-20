import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SobreERComponent } from './component/sobre-er/sobre-er.component';
import { from } from 'rxjs';
//Importación de servicios
import {CargaJsService}  from './Services/carga-js.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SobreERComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargaJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
