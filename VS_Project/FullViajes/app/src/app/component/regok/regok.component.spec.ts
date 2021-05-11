import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegokComponent } from './regok.component';

describe('RegokComponent', () => {
  let component: RegokComponent;
  let fixture: ComponentFixture<RegokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
