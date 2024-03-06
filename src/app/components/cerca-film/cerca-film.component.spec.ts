import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaFilmComponent } from './cerca-film.component';

describe('CercaFilmComponent', () => {
  let component: CercaFilmComponent;
  let fixture: ComponentFixture<CercaFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CercaFilmComponent]
    });
    fixture = TestBed.createComponent(CercaFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
