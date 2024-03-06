import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquistatiComponent } from './acquistati.component';

describe('AcquistatiComponent', () => {
  let component: AcquistatiComponent;
  let fixture: ComponentFixture<AcquistatiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcquistatiComponent]
    });
    fixture = TestBed.createComponent(AcquistatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
