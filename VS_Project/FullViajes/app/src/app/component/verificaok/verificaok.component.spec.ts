import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaokComponent } from './verificaok.component';

describe('VerificaokComponent', () => {
  let component: VerificaokComponent;
  let fixture: ComponentFixture<VerificaokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificaokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificaokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
