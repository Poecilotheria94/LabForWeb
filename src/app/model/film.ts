export interface Root {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Root {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface filmAcquistato {
  id: number;
  userId: number;
  film: Result;
}

export class NuovoFilmAcquistato {
  constructor(public userId: number, public film: Result) {}
}

export interface dettagli {
  id: number;
  results: dettaglioFilm[];
}

export interface dettaglioFilm {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
}
