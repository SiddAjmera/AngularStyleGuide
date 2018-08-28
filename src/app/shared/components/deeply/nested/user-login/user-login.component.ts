import { Component, OnInit } from '@angular/core';

// import { AuthService } from './../../../../../core/services/auth/auth.service';
import { AuthService } from '@app/core/services/auth/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
