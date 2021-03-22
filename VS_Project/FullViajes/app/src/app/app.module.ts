
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioService } from './services/usuario.service';
import { IndexComponent } from './component/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { SobreErComponent } from './component/sobre-er/sobre-er.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UsuarioComponent,
    IndexComponent,
    SobreErComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    HttpClientModule,          
    ReactiveFormsModule,
    RouterModule,    
    
  ],

  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
