import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUsuarioRegistradoComponent } from './navbar-usuario-registrado.component';

describe('NavbarUsuarioRegistradoComponent', () => {
  let component: NavbarUsuarioRegistradoComponent;
  let fixture: ComponentFixture<NavbarUsuarioRegistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUsuarioRegistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUsuarioRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
