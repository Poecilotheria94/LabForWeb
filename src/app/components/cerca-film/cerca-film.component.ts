import { Component, OnInit } from '@angular/core';
import { PopularServiceService } from 'src/app/service/popular-service.service';
import { Result } from 'src/app/model/film';

@Component({
  selector: 'app-cerca-film',
  templateUrl: './cerca-film.component.html',
  styleUrls: ['./cerca-film.component.css'],
})
export class CercaFilmComponent implements OnInit {
  constructor(private ps: PopularServiceService) {}

  films: Result[] = [];
  searchTerm: string = '';

  ngOnInit(): void {}

  cercaFilms(): void {
    if (this.searchTerm.trim() !== '') {
      this.ps.getById(this.searchTerm).subscribe((dati) => {
        // Utilizza una ricerca case-insensitive
        const searchTermLowerCase = this.searchTerm.toLowerCase();

        // Se la chiamata restituisce un singolo film, assegna direttamente a this.films
        // Se restituisce un array di film, assegna direttamente a this.films
        this.films = Array.isArray(dati.results)
          ? dati.results
          : [dati.results];
      });
    }
  }
}
