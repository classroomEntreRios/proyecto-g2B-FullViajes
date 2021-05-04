import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtractivosviewComponent } from './atractivosview.component';

describe('AtractivosviewComponent', () => {
  let component: AtractivosviewComponent;
  let fixture: ComponentFixture<AtractivosviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtractivosviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtractivosviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
