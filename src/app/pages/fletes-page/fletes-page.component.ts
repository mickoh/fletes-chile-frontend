import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fletes-page',
  templateUrl: './fletes-page.component.html',
  styleUrls: ['./fletes-page.component.scss']
})
export class FletesPageComponent implements OnInit {
  isLoading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
