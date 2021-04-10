import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfileditComponent } from './perfiledit.component';

describe('PerfileditComponent', () => {
  let component: PerfileditComponent;
  let fixture: ComponentFixture<PerfileditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfileditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfileditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
