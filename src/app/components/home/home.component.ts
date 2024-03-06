import { Component } from '@angular/core';
import { AutenticazioneService } from 'src/app/service/autenticazione.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public authService: AutenticazioneService) {}
}
