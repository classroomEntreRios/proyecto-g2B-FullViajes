import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextrichComponent } from './textrich.component';

describe('TextrichComponent', () => {
  let component: TextrichComponent;
  let fixture: ComponentFixture<TextrichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextrichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextrichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
