import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FletesPageComponent } from './fletes-page.component';

describe('FletesPageComponent', () => {
  let component: FletesPageComponent;
  let fixture: ComponentFixture<FletesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FletesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FletesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
