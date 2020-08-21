import { Component, OnInit } from '@angular/core';
import { TransporteService } from 'src/app/services/Transporte/transporte.service';

@Component({
  selector: 'app-transportes-page',
  templateUrl: './transportes-page.component.html',
  styleUrls: ['./transportes-page.component.scss']
})
export class TransportesPageComponent implements OnInit {
    transports: any;
    // tslint:disable-next-line: no-inferrable-types
    isLoading: boolean = false;
  constructor(private transporteService: TransporteService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.transports = this.transporteService.getTransports().subscribe( (resp: any) =>
    {
    this.transports = resp.data.docs;
    this.isLoading = false;
    });
  }

}
