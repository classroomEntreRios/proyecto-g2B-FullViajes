import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { IndexComponent } from './component/index/index.component';


const routes: Routes =
  [
    { path: '', component: IndexComponent  },
    { path: 'index', component: IndexComponent },
    { path: 'usuario', component: UsuarioComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
