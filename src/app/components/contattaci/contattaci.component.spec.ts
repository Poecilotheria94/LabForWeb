import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattaciComponent } from './contattaci.component';

describe('ContattaciComponent', () => {
  let component: ContattaciComponent;
  let fixture: ComponentFixture<ContattaciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContattaciComponent]
    });
    fixture = TestBed.createComponent(ContattaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
