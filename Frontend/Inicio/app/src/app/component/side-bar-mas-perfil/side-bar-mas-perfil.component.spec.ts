import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMasPerfilComponent } from './side-bar-mas-perfil.component';

describe('SideBarMasPerfilComponent', () => {
  let component: SideBarMasPerfilComponent;
  let fixture: ComponentFixture<SideBarMasPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarMasPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarMasPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
