import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfiladeditComponent } from './perfiladedit.component';

describe('PerfiladeditComponent', () => {
  let component: PerfiladeditComponent;
  let fixture: ComponentFixture<PerfiladeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfiladeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfiladeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
