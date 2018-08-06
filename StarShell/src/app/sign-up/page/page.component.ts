import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ChangeDetectorRef } from '@angular/core';
import { AuthService} from '../auth.service'
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  email:FormControl;
  password:FormControl;
  profile: FormGroup;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.email= new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9._]+@[a-z]+')]);
    this.password = new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.minLength(6)]);
    this.profile = new FormGroup({
      email:this.email,
      password:this.password
    })
  }
  onSubmit(event: Event,path) {
    if(this.profile.invalid){
      this.email.setValue('');
      this.password.setValue('');
      return 
    }
    this.authService.login()
  }
}
