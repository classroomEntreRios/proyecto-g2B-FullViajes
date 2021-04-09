import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreERComponent } from './sobre-er.component';

describe('SobreERComponent', () => {
  let component: SobreERComponent;
  let fixture: ComponentFixture<SobreERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
