import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreErComponent } from './sobre-er.component';

describe('SobreErComponent', () => {
  let component: SobreErComponent;
  let fixture: ComponentFixture<SobreErComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreErComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
