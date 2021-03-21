import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUserRegistradoComponent } from './navbar-user-registrado.component';

describe('NavbarUserRegistradoComponent', () => {
  let component: NavbarUserRegistradoComponent;
  let fixture: ComponentFixture<NavbarUserRegistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUserRegistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUserRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
