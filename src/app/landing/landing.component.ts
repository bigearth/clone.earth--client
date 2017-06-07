/**
 * Created by matth on 6/6/2017.
 */


import {Component, OnInit} from "@angular/core";
import {LoginService} from "../login/login.service";
@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private _auth: LoginService) {
  }

  public login() {
    this._auth.login();
  }
}
