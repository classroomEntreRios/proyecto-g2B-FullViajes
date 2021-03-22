import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// importo servicios
//import {CargarScriptsJSService} from './services/cargar-scripts-js.service';
// fin de importar servicios
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRegistroComponent } from './component/form-registro/form-registro.component';
import { UsuarioService } from './services/usuario.service';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { ContentinitComponent } from './component/contentinit/contentinit.component';
import { SobreErComponent } from './component/sobre-er/sobre-er.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegistroComponent,
    UsuarioComponent,
    NavbarComponent,
    FooterComponent,
    PrincipalComponent,
    ContentinitComponent,
    SobreErComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
