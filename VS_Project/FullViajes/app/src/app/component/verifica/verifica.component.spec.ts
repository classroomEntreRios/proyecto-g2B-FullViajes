import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaComponent } from './verifica.component';

describe('VerificaComponent', () => {
  let component: VerificaComponent;
  let fixture: ComponentFixture<VerificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
