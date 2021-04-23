import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveuserComponent } from './deactiveuser.component';

describe('DeactiveuserComponent', () => {
  let component: DeactiveuserComponent;
  let fixture: ComponentFixture<DeactiveuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactiveuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
