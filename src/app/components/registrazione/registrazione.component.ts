import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { RegisterDto } from 'src/app/model/auth';
import { AutenticazioneService } from 'src/app/service/autenticazione.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css'],
})
export class RegistrazioneComponent {
  model = new RegisterDto();
  errorMessage = '';

  constructor(
    private authService: AutenticazioneService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  register() {
    this.authService
      .register(this.model)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe((user) => {
        if (user) {
          this.snackBar.open('Registrazione avvenuta con successo!', 'OK');
          this.router.navigate(['/login']);
        }
      });
  }
}
