import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalregComponent } from './principalreg.component';

describe('PrincipalregComponent', () => {
  let component: PrincipalregComponent;
  let fixture: ComponentFixture<PrincipalregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
