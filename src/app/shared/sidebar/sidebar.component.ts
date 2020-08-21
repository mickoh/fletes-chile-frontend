import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // View 
  @Input() darkTheme: boolean = false;
  showSidebar: boolean = true;

  // Url de los íconos
  iconUrl: string = '../../../assets/sprite.svg#icon-'

  sidebarItems: any[] = [
    { titulo: 'Inicio', url: '/', icono: `${this.iconUrl}home` },
    { titulo: 'Fletes', url: '/fletes', icono: `${this.iconUrl}profile` },
    { titulo: 'Transportes', url: '/transportes', icono: `${this.iconUrl}truck` },
    { titulo: 'Clientes', url: '/clientes', icono: `${this.iconUrl}users` }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
