import { style } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Result } from 'src/app/model/film';

import { PopularServiceService } from 'src/app/service/popular-service.service';

@Component({
  selector: 'app-dettaglio-film',
  templateUrl: './dettaglio-film.component.html',
  styleUrls: ['./dettaglio-film.component.css'],
})
export class DettaglioFilmComponent implements OnInit {
  movieDetails?: Result;
  castDetails: any;
  trailerDetails: any;
  constructor(
    private snackbar: MatSnackBar,
    private ps: PopularServiceService,
    private router: ActivatedRoute,
    private route: Router,
    private sanitizer: DomSanitizer
  ) {}

  //trailer
  public showTrailerDiv: boolean = false;

  // ... other methods ...

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    const movieId = this.router.snapshot.paramMap.get('id');
    const cast = this.router.snapshot.paramMap.get('cast');
    const trailer = this.router.snapshot.paramMap.get('results');
    console.log(movieId, 'movieId');
    console.log(cast, 'cast');

    console.log(trailer, 'trailer');
    this.getInfo(movieId);
    this.getCast(movieId);
    //trailer
    const id = this.router.snapshot.paramMap.get('id');
    this.theTrailer(id);
  }
  getInfo(id: any) {
    this.ps.getInfoFilm(id).subscribe((result) => {
      // console.log(result, 'Movie details:');
      this.movieDetails = result;
    });
  }

  getCast(id: any) {
    this.ps.getCredits(id).subscribe((result) => {
      console.log('Cast:', result);
      this.castDetails = result;
    });
  }

  // acquistaFilm(movieId: Result) {
  //   if (this.movieDetails?.id) {
  //     this.ps.favoriteFilms(movieId).subscribe((result) => {
  //       alert('Aggiungi snackbar');
  //     });
  //   } else {
  //     alert('Film already added in list');
  //   }
  // }
  acquistaFilm(movieId: Result) {
    if (this.movieDetails?.id) {
      // Fetch the list of favorite films for the user
      this.ps.getSaveFavouriteFilms().subscribe((savedFilms) => {
        // Check if the movie with the same ID exists in the list
        const movieExists = savedFilms.some(
          (savedFilm) => savedFilm.film.id === movieId.id
        );

        if (!movieExists) {
          // If the movie does not exist, add it to the list of favorite films
          this.ps.favoriteFilms(movieId).subscribe((result) => {
            this.snackbar.open('Film acquistato con successo !');
            this.route.navigate(['/acquistati']);
          });
        } else {
          this.snackbar.open('Film già acquistato...');
        }
      });
    }
  }

  // trailer

  theTrailer(id: any) {
    this.ps.getTrailer(id).subscribe((result) => {
      console.log(result, 'video');
      const trailer = result.results.find(
        (trail: any) => trail.type === 'Trailer' && trail.site === 'YouTube'
      );
      if (trailer) {
        const trailerUrl = `https://www.youtube.com/embed/${trailer.key}`;
        this.trailerDetails =
          this.sanitizer.bypassSecurityTrustResourceUrl(trailerUrl);
      }
    });
  }

  public showTrailer() {
    this.showTrailerDiv = true;
  }

  chiudiTrailer() {
    this.showTrailerDiv = false;
  }
}
