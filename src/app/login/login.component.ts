import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public email: string;
  public password: string;
  public error: boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  onSubmit() {
    if (!this.email || !this.password) {
      return;
    }
    this.auth.login(this.email, this.password)
      .subscribe(
        (result: any) => {
          if (result.status === 'ok') {
            this.router.navigate(['/compressor']);
          } else {
            this.error = true;
          }
        },
        ( errorResponse ) => {
          this.error = errorResponse != null;
        }
      );
  }
}
