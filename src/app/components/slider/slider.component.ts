import { Component } from '@angular/core';
import { Result } from 'src/app/model/film';
import { PopularServiceService } from 'src/app/service/popular-service.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  pauseOnHover = true;
  pauseOnFocus = true;

  constructor(private ps: PopularServiceService) {}

  films: Result[] = [];

  ngOnInit(): void {
    this.ps.searchFilm(3).subscribe((dati) => {
      this.films = dati.results;
    });
  }
}
