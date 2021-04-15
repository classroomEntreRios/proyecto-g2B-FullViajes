import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardperfilComponent } from './dashboardperfil.component';

describe('DashboardperfilComponent', () => {
  let component: DashboardperfilComponent;
  let fixture: ComponentFixture<DashboardperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
