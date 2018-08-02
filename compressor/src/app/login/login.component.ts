import { Component, OnInit } from '@angular/core';
import { CompressorService } from '../compressor.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email:string;
  password: string;
  
  constructor(private compressor: CompressorService, private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    if(!this.email || !this.password){
      return ;
    }
    this.compressor.login(this.email,this.password).subscribe((result:any)=>{
      if(result.status==='ok'){
        this.router.navigate(['/compressor'])
      }
      else{
        console.log('auth error')
      }
    })
  }
}
