import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  email: string;
  password: string;
  errorMsg: string;
  constructor(private authService: AuthServiceService, private router: Router) { }

  signUp(){
    console.log("Sign Up Service");
    const email = this.email;
    const password = this.password;
    
    this.authService.signUp(email, password)
    .then(
      resolve => this.router.navigate([''])
      .catch(error => this.errorMsg = error.message)
    );
  }



}
