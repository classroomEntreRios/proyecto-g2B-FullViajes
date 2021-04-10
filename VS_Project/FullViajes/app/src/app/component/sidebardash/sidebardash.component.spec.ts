import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardashComponent } from './sidebardash.component';

describe('SidebardashComponent', () => {
  let component: SidebardashComponent;
  let fixture: ComponentFixture<SidebardashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebardashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebardashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
