import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TransporteService {
  urlApi: string = environment.apiUrl;  

  constructor(
    private http: HttpClient
  ) { }

  getTransports() {
    let url = `${this.urlApi}/transportes`; 
    return this.http.get(url);
  }
}
