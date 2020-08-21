import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportesPageComponent } from './transportes-page.component';

describe('TransportesPageComponent', () => {
  let component: TransportesPageComponent;
  let fixture: ComponentFixture<TransportesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
