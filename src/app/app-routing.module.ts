import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { HomeComponent } from './components/home/home.component';
import { CercaFilmComponent } from './components/cerca-film/cerca-film.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { DettaglioFilmComponent } from './components/dettaglio-film/dettaglio-film.component';

import { AcquistatiComponent } from './components/acquistati/acquistati.component';
import { ContattaciComponent } from './components/contattaci/contattaci.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'catalogo',
        component: CatalogoComponent,
      },
    ],
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cerca',
    component: CercaFilmComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrazione',
    component: RegistrazioneComponent,
  },
  {
    path: 'dettaglioFilm/:id',
    component: DettaglioFilmComponent,
  },

  {
    path: 'acquistati',
    component: AcquistatiComponent,
  },
  {
    path: 'contattaci',
    component: ContattaciComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
