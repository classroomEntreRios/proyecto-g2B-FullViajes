import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelcityComponent } from './delcity.component';

describe('DelcityComponent', () => {
  let component: DelcityComponent;
  let fixture: ComponentFixture<DelcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
