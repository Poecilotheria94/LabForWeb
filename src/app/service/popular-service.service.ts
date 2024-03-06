import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import {
  NuovoFilmAcquistato,
  Result,
  Root,
  dettagli,
  filmAcquistato,
} from '../model/film';
import { environment } from 'src/environments/environment.development';
import { AutenticazioneService } from './autenticazione.service';

@Injectable({
  providedIn: 'root',
})
export class PopularServiceService {
  constructor(
    private http: HttpClient,
    private authService: AutenticazioneService
  ) {}

  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + environment.MOVIE_AUTHORIZATION_KEY,
    }),
  };

  searchFilm(page: number): Observable<Root> {
    return this.http.get<Root>(
      `${environment.MOVIE_API_URL}/movie/popular?&page=${page}`,
      this.httpOptions
    );
  }

  searchHorror(page: number): Observable<Root> {
    return this.http.get<Root>(
      `${environment.MOVIE_API_URL}/discover/movie?language=it-IT&with_genres=27&page=${page}`,
      this.httpOptions
    );
  }

  searchAdventure(): Observable<Root> {
    return this.http.get<Root>(
      `${environment.MOVIE_API_URL}/discover/movie?language=it-IT&with_genres=12`,
      this.httpOptions
    );
  }

  searchCommedy(): Observable<Root> {
    return this.http.get<Root>(
      `${environment.MOVIE_API_URL}/discover/movie?language=it-IT&with_genres=35`,
      this.httpOptions
    );
  }
  searchDocumentary(): Observable<Root> {
    return this.http.get<Root>(
      `${environment.MOVIE_API_URL}/discover/movie?language=it-IT&with_genres=99`,
      this.httpOptions
    );
  }
  searchAction(): Observable<Root> {
    return this.http.get<Root>(
      `${environment.MOVIE_API_URL}/discover/movie?language=it-IT&with_genres=28`,
      this.httpOptions
    );
  }
  searchAnimation(): Observable<Root> {
    return this.http.get<Root>(
      `${environment.MOVIE_API_URL}/discover/movie?language=it-IT&with_genres=16`,
      this.httpOptions
    );
  }
  searchWar(): Observable<Root> {
    return this.http.get<Root>(
      `${environment.MOVIE_API_URL}/discover/movie?language=it-IT&with_genres=10752`,
      this.httpOptions
    );
  }

  // cerca-film

  getById(searchTerm: string): Observable<Root> {
    return this.http.get<Root>(
      `${environment.MOVIE_API_URL}/search/movie?language=it-IT&query=${searchTerm}`,
      this.httpOptions
    );
  }

  getInfoFilm(id: number): Observable<Result> {
    return this.http.get<Result>(
      `${environment.MOVIE_API_URL}/movie/${id}?language=it-IT`,
      this.httpOptions
    );
  }

  getCredits(id: number): Observable<any> {
    return this.http.get<any>(
      `${environment.MOVIE_API_URL}/movie/${id}/credits?language=it-IT`,
      this.httpOptions
    );
  }

  getTrailer(id: number): Observable<dettagli> {
    return this.http.get<dettagli>(
      `${environment.MOVIE_API_URL}/movie/${id}/videos?api_key=${environment.MY_API_KEY}`,
      this.httpOptions
    );
  }

  favoriteFilms(movie: Result): Observable<filmAcquistato | undefined> {
    let model = new NuovoFilmAcquistato(
      this.authService.getLoggedUser()!.user.id,
      movie
    );

    if (this.authService.isUserLogged) {
      console.log(this.authService.getLoggedUser()!.accessToken);

      const httpOptions = {
        headers: new HttpHeaders({
          Authorization:
            'Bearer ' + this.authService.getLoggedUser()?.accessToken,
        }),
      };

      return this.http.post<filmAcquistato>(
        `${environment.JSON_SERVER_BASE_URL}/filmAcquistati`,
        model,
        httpOptions
      );
    } else {
      return of(undefined);
    }
  }

  getSaveFavouriteFilms(): Observable<filmAcquistato[]> {
    if (this.authService.isUserLogged) {
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization:
            'Bearer ' + this.authService.getLoggedUser()!.accessToken,
        }),
      };

      return this.http.get<filmAcquistato[]>(
        `${environment.JSON_SERVER_BASE_URL}/filmAcquistati?userId=${
          this.authService.getLoggedUser()!.user.id
        }`,
        httpOptions
      );
    } else {
      return of([]);
    }
  }

  //elimina film

  cancellaFilm(id: number): Observable<any> {
    // Creazione dell'oggetto che contiene le opzioni per la richiesta HTTP
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          'Bearer ' + this.authService.getLoggedUser()?.accessToken,
        // Authorization: 'Bearer ' + environment.MOVIE_AUTHORIZATION_KEY,
      }),
    };

    // Costruzione dell'URL per la richiesta di cancellazione del film con l'ID specificato
    const url = `${environment.JSON_SERVER_BASE_URL}/filmAcquistati/${id}`; //${userId}

    // Esecuzione della richiesta di cancellazione del film mediante il metodo delete di HttpClient
    // Restituzione dell'Observable contenente la risposta della richiesta
    return this.http.delete<any>(url, httpOptions);
  }
}
