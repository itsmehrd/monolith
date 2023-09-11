import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmaThirdRouteComponent } from './fma-third-route.component';

describe('FmaThirdRouteComponent', () => {
  let component: FmaThirdRouteComponent;
  let fixture: ComponentFixture<FmaThirdRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmaThirdRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmaThirdRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
