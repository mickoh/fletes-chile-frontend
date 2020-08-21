import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFletePageComponent } from './crear-flete-page.component';

describe('CrearFletePageComponent', () => {
  let component: CrearFletePageComponent;
  let fixture: ComponentFixture<CrearFletePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFletePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
