import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentinitComponent } from './contentinit.component';

describe('ContentinitComponent', () => {
  let component: ContentinitComponent;
  let fixture: ComponentFixture<ContentinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentinitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
