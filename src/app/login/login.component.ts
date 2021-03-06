import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  mouseoverLogin

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
 
  }
  
  Login(formValue){
    this.auth.loginUser(formValue.username, formValue.password)
    this.router.navigate(['dashboard']);
  }

}
