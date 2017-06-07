import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private _auth:LoginService){}

  ngOnInit() {
    this._auth.handleAuthentication();
  }

  public login() {
    this._auth.login();
  }
}
