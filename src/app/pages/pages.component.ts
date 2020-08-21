import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  darkTheme: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log('darktheme from ls', JSON.parse(localStorage.getItem('darkTheme')));
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')) || false;
  }

  changeTheme(activeDarkTheme) {
    this.darkTheme = activeDarkTheme;
  }

}
