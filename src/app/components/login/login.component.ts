import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { LoginDto } from 'src/app/model/auth';
import { AutenticazioneService } from 'src/app/service/autenticazione.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private snackBar: MatSnackBar) {}
  model = new LoginDto();
  errorMessage = '';
  authService = inject(AutenticazioneService);
  router = inject(Router);

  login() {
    this.authService
      .login(this.model)
      .pipe(
        tap((dati) => console.log('COMPONENTE', dati)),
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe((loggedUser) => {
        // console.log('SUBSCRIBE');

        if (loggedUser) {
          this.snackBar.open('Login avvenuto con successo!', 'Ok');
          this.router.navigate(['']);
        }
      });
  }
}
