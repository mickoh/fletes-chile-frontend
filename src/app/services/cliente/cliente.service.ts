import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlApi: string = environment.apiUrl;  

  constructor(
    private http: HttpClient
  ) { }

  getClients() {
    let url = `${this.urlApi}/clientes`; 
    return this.http.get(url);
  }
}
