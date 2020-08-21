import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPageComponent } from './inicio-page/inicio-page.component';
import { ClientesPageComponent } from './clientes-page/clientes-page.component';
import { FletesPageComponent } from './fletes-page/fletes-page.component';
import { TransportesPageComponent } from './transportes-page/transportes-page.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InicioPageComponent, 
    ClientesPageComponent, 
    FletesPageComponent, 
    TransportesPageComponent, 
    PagesComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
