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
import { RegnavbarComponent } from './component/regnavbar/regnavbar.component';
import { PrincipalregComponent } from './component/principalreg/principalreg.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PerfileditComponent } from './component/perfiledit/perfiledit.component';
import { SidebardashComponent } from './component/sidebardash/sidebardash.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { AtractivosComponent } from './component/atractivos/atractivos.component';
import { ForoComponent } from './component/foro/foro.component';
import { CiudadesComponent } from './component/ciudades/ciudades.component';
import { AddcityComponent } from './component/addcity/addcity.component';
import { AdduserComponent } from './component/adduser/adduser.component';
import { LevelaccessComponent } from './component/levelaccess/levelaccess.component';
import { ClimaComponent } from './component/clima/clima.component';
import { ViewuserComponent } from './component/viewuser/viewuser.component';
import { ActiveuserComponent } from './component/activeuser/activeuser.component';
import { DeactiveuserComponent } from './component/deactiveuser/deactiveuser.component';
import { EdituserComponent } from './component/edituser/edituser.component';
import { EditcityComponent } from './component/editcity/editcity.component';
import { PerfiladComponent } from './component/perfilad/perfilad.component';
import { PerfiladeditComponent } from './component/perfiladedit/perfiladedit.component';
import { UsersettingsComponent } from './component/usersettings/usersettings.component';
import { AdminsettingsComponent } from './component/adminsettings/adminsettings.component';
import { CitiesviewComponent } from './component/citiesview/citiesview.component';
import { DatePipe } from '@angular/common';

//import { DashboardDefComponent } from './component/dashboard-def/dashboard-def.component';
import { CiudadesService } from './services/ciudades.service';
import { ClimaService } from './services/clima.service';
import { MailerService } from './services/mailer.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DelcityComponent } from './component/delcity/delcity.component';
import { ClimahistoricoComponent } from './component/climahistorico/climahistorico.component';
import { AtractivosviewComponent } from './component/atractivosview/atractivosview.component';
import { VerificaComponent } from './component/verifica/verifica.component';
import { LevelaccesforoComponent } from './component/levelaccesforo/levelaccesforo.component';
import { EventosComponent } from './component/eventos/eventos.component';
import { TopicsComponent } from './component/topics/topics.component';
import { ChangepswdComponent } from './component/changepswd/changepswd.component';
import { NewtopicComponent } from './component/newtopic/newtopic.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { ReplyComponent } from './component/reply/reply.component';
import { RepliesComponent } from './component/replies/replies.component';
import { RegokComponent } from './component/regok/regok.component';
import { VerificaokComponent } from './component/verificaok/verificaok.component';



@NgModule({
  declarations: [
    AppComponent,
    FormRegistroComponent,
    UsuarioComponent,
    NavbarComponent,
    FooterComponent,
    PrincipalComponent,
    ContentinitComponent,
    SobreErComponent,
    RegnavbarComponent,
    PrincipalregComponent,
    SidebarComponent,
    DashboardComponent,
    PerfilComponent,
    LogoutComponent,
    PerfileditComponent,
    SidebardashComponent,
    UsuariosComponent,
    AtractivosComponent,
    ForoComponent,
    CiudadesComponent,
    AddcityComponent,
    AdduserComponent,
    LevelaccessComponent,
    ClimaComponent,
    ViewuserComponent,
    ActiveuserComponent,
    DeactiveuserComponent,
    EdituserComponent,
    EditcityComponent,
    PerfiladComponent,
    PerfiladeditComponent,
    UsersettingsComponent,
    AdminsettingsComponent,
    CitiesviewComponent,
    DelcityComponent,
    ClimahistoricoComponent,
    AtractivosviewComponent,
    VerificaComponent,
    LevelaccesforoComponent,
    EventosComponent,
    TopicsComponent,
    NewtopicComponent,
    ChangepswdComponent,
    ContactoComponent,
    ReplyComponent,
    RepliesComponent,
    RegokComponent,
    VerificaokComponent,
    
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
    UsuarioService, CiudadesService,ClimaService, MailerService, DatePipe,
    {provide: LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
