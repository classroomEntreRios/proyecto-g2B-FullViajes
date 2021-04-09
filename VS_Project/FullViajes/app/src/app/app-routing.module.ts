import {ModuleWithProviders} from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegistroComponent } from './component/form-registro/form-registro.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import {PrincipalregComponent } from './component/principalreg/principalreg.component'
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { LogoutComponent } from './component/logout/logout.component';


const routes: Routes = [
  // {path:'', component: componente que muestra por defecto si ruta vacia},
  {path:'formulario', component: FormRegistroComponent},
  {path:'principal2', component: PrincipalregComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'logout', component: LogoutComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'', component: PrincipalComponent},
  {path:'index', component: PrincipalComponent},
  {path:'usuario', component: UsuarioComponent},
  {path:'**', redirectTo: '/', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
