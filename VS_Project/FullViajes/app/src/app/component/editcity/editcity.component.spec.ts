import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcityComponent } from './editcity.component';

describe('EditcityComponent', () => {
  let component: EditcityComponent;
  let fixture: ComponentFixture<EditcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
