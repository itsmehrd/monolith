import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmaFirstRouteComponent } from './fma-first-route.component';

describe('FmaFirstRouteComponent', () => {
  let component: FmaFirstRouteComponent;
  let fixture: ComponentFixture<FmaFirstRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmaFirstRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmaFirstRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
