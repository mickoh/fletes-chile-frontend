import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()darkTheme: boolean = false;
  @Output() emiteDarkTheme: EventEmitter<boolean> = new EventEmitter();

  constructor(_themeService: ThemeService) {

  }

  ngOnInit(): void {
  
  }

  changeTheme() {
    this.darkTheme = !this.darkTheme;

    localStorage.setItem('darkTheme', JSON.stringify(this.darkTheme));
    this.emiteDarkTheme.emit(this.darkTheme);
  }

}
