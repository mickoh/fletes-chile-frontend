import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, Router, RouterModule } from '@angular/router';
import { InicioPageComponent } from './inicio-page/inicio-page.component';
import { FletesPageComponent } from './fletes-page/fletes-page.component';
import { TransportesPageComponent } from './transportes-page/transportes-page.component';
import { ClientesPageComponent } from './clientes-page/clientes-page.component';
import { PagesComponent } from './pages.component';
import { CrearFletePageComponent } from './crear-flete-page/crear-flete-page.component';

export const routes: Routes = [
  {
    // La ruta raiz muestra PagesComponent
    // Esta ruta tiene rutas hijas que se renderizaran en router-outlet de PagesComponent
    path: '',
    component: PagesComponent,
    children: [
      { path: 'inicio', component: InicioPageComponent },
      { path: 'fletes', component: FletesPageComponent },
      { path: 'transportes', component: TransportesPageComponent },
      { path: 'nuevo-flete', component: CrearFletePageComponent },
      { path: 'clientes', component: ClientesPageComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
