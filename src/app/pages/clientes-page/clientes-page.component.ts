import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-clientes-page',
  templateUrl: './clientes-page.component.html',
  styleUrls: ['./clientes-page.component.scss']
})
export class ClientesPageComponent implements OnInit {
  clients:any;
  isLoading: boolean = false;


  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.clients = this.clienteService.getClients().subscribe( (resp:any) => {
      this.clients = resp.data.docs;
      
      this.isLoading = false;
      
    });
  }


  editClient() {
    console.log("Edit client button was clicked!");
  }
}
