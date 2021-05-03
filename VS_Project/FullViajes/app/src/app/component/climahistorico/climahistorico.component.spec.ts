import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimahistoricoComponent } from './climahistorico.component';

describe('ClimahistoricoComponent', () => {
  let component: ClimahistoricoComponent;
  let fixture: ComponentFixture<ClimahistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimahistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimahistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
