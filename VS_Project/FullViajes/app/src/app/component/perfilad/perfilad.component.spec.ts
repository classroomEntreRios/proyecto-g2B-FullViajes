import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfiladComponent } from './perfilad.component';

describe('PerfiladComponent', () => {
  let component: PerfiladComponent;
  let fixture: ComponentFixture<PerfiladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfiladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfiladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
