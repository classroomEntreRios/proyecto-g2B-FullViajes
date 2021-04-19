import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDefComponent } from './dashboard-def.component';

describe('DashboardDefComponent', () => {
  let component: DashboardDefComponent;
  let fixture: ComponentFixture<DashboardDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
