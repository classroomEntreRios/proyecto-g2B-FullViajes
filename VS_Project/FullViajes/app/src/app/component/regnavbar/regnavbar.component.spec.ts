import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegnavbarComponent } from './regnavbar.component';

describe('RegnavbarComponent', () => {
  let component: RegnavbarComponent;
  let fixture: ComponentFixture<RegnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
