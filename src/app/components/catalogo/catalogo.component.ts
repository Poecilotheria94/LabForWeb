import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Result } from 'src/app/model/film';
import { PopularServiceService } from 'src/app/service/popular-service.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent {
  constructor(private ps: PopularServiceService) {}
  @ViewChild('scrollToTopButton')
  scrollToTopButton!: ElementRef;

  films: Result[] = [];
  currentPage = 1;

  ngOnInit(): void {
    this.loadFilms(this.currentPage);
  }

  loadFilms(page: number) {
    this.ps.searchFilm(page).subscribe((filmData) => {
      this.films = this.films.concat(filmData.results);
    });
  }
  onLoadMoreClick(): void {
    this.currentPage++;
    this.loadFilms(this.currentPage);
  }

  Horror(page: number) {
    this.ps.searchHorror(page).subscribe((filmData) => {
      console.log(filmData);
      this.films = filmData.results; // aggiungendo concat per visualizzare altri film dello stesso genere al click non funge
    });
  }
  Avventura() {
    this.ps.searchAdventure().subscribe((filmData) => {
      console.log(filmData);
      this.films = filmData.results;
    });
  }
  Commedia() {
    this.ps.searchCommedy().subscribe((filmData) => {
      console.log(filmData);
      this.films = filmData.results;
    });
  }
  Documentario() {
    this.ps.searchDocumentary().subscribe((filmData) => {
      console.log(filmData);
      this.films = filmData.results;
    });
  }
  Azione() {
    this.ps.searchAction().subscribe((filmData) => {
      console.log(filmData);
      this.films = filmData.results;
    });
  }
  Animazione() {
    this.ps.searchAnimation().subscribe((filmData) => {
      console.log(filmData);
      this.films = filmData.results;
    });
  }
  War() {
    this.ps.searchWar().subscribe((filmData) => {
      console.log(filmData);
      this.films = filmData.results;
    });
  }

  //gestisco scroll

  showScrollToTopButton = false;
  scrollThreshold = 2500;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollToTopButton = window.scrollY > this.scrollThreshold;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
