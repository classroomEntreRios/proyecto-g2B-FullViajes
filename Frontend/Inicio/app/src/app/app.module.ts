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
import { SideBarDashboardComponent } from './component/side-bar-dashboard/side-bar-dashboard.component';
import { NavbarUserRegistradoComponent } from './component/navbar-user-registrado/navbar-user-registrado.component';
import { NavbarUsuarioRegistradoComponent } from './component/navbar-usuario-registrado/navbar-usuario-registrado.component';
import { SideBarMasPerfilComponent } from './component/side-bar-mas-perfil/side-bar-mas-perfil.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ar_EG } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ar from '@angular/common/locales/ar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(ar);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SobreERComponent,
    SideBarDashboardComponent,
    NavbarUserRegistradoComponent,
    NavbarUsuarioRegistradoComponent,
    SideBarMasPerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [
    CargaJsService,
    { provide: NZ_I18N, useValue: ar_EG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
