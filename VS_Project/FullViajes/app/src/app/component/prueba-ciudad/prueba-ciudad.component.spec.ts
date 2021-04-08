import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaCiudadComponent } from './prueba-ciudad.component';

describe('PruebaCiudadComponent', () => {
  let component: PruebaCiudadComponent;
  let fixture: ComponentFixture<PruebaCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
