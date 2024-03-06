import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Result, filmAcquistato } from 'src/app/model/film';
import { PopularServiceService } from 'src/app/service/popular-service.service';

@Component({
  selector: 'app-acquistati',
  templateUrl: './acquistati.component.html',
  styleUrls: ['./acquistati.component.css'],
})
export class AcquistatiComponent implements OnInit {
  constructor(
    private ps: PopularServiceService,
    private snackBar: MatSnackBar
  ) {}
  movie: filmAcquistato[] = [];

  ngOnInit(): void {
    this.ps.getSaveFavouriteFilms().subscribe((movieSaved) => {
      this.movie = movieSaved;
    });
  }

  restituisciFilm(id: number): void {
    //cancell film with id
    this.ps.cancellaFilm(id).subscribe(() => {
      //update bought films
      this.ps.getSaveFavouriteFilms().subscribe((movieSaved) => {
        this.movie = movieSaved;
        this.snackBar.open('Film restituito con successo', 'Ok');
      });
    });
  }
}
