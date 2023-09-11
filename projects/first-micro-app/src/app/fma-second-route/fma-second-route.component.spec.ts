import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmaSecondRouteComponent } from './fma-second-route.component';

describe('FmaSecondRouteComponent', () => {
  let component: FmaSecondRouteComponent;
  let fixture: ComponentFixture<FmaSecondRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmaSecondRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmaSecondRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
