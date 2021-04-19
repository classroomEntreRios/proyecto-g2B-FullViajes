import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesviewComponent } from './citiesview.component';

describe('CitiesviewComponent', () => {
  let component: CitiesviewComponent;
  let fixture: ComponentFixture<CitiesviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
