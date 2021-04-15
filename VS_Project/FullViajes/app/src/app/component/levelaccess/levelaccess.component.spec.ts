import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelaccessComponent } from './levelaccess.component';

describe('LevelaccessComponent', () => {
  let component: LevelaccessComponent;
  let fixture: ComponentFixture<LevelaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
