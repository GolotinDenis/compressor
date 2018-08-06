import { Component } from '@angular/core';
import { Router} from '@angular/router';

import { CompressorService } from '../compressor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public email: string;
  public password: string;

  constructor(
    private compressor: CompressorService,
    private router: Router
  ) { }

  onSubmit() {
    if (!this.email || !this.password) {
      return ;
    }
    this.compressor
      .login(this.email, this.password)
      .subscribe((result: any) => {
        if (result.status === 'ok') {
          this.router.navigate(['/compressor']);
        } else {
          console.error('auth error');
        }
      });
  }
}
