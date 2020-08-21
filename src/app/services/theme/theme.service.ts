import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme: string = 'light-theme';

  constructor() { }

  darkTheme() {
    this.theme = 'dark-theme';
  }
}
