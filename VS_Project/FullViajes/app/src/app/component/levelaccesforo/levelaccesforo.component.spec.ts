import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelaccesforoComponent } from './levelaccesforo.component';

describe('LevelaccesforoComponent', () => {
  let component: LevelaccesforoComponent;
  let fixture: ComponentFixture<LevelaccesforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelaccesforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelaccesforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
