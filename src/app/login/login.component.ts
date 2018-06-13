import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.email, this.password).catch(error => console.log(error));
  }

}
