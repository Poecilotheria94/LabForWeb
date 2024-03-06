import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contattaci',
  templateUrl: './contattaci.component.html',
  styleUrls: ['./contattaci.component.css'],
})
export class ContattaciComponent implements OnInit {
  constructor(private snackbar: MatSnackBar, private route: Router) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form);

    this.snackbar.open(
      'Richiesta inviata, ti daremo un feedback appena possibile :)'
    );
    this.route.navigate(['/home']);
  }
}
