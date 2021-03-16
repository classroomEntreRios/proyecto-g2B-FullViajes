import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegistroComponent } from './component/form-registro/form-registro.component';

const routes: Routes = [
  // {path:'', component: componente que muestra por defecto si ruta vacia},
  {path:'formulario', component: FormRegistroComponent},
  {path:'**', redirectTo: '/', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
