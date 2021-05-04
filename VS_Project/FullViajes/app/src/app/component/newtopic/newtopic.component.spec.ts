import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtopicComponent } from './newtopic.component';

describe('NewtopicComponent', () => {
  let component: NewtopicComponent;
  let fixture: ComponentFixture<NewtopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
