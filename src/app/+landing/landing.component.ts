/**
 * Created by matth on 6/6/2017.
 */


import {Component, OnInit} from "@angular/core";
import {LoginService} from "../login/login.service";
import { Router } from '@angular/router';
@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

  constructor(private _auth: LoginService) {
  }

  ngOnInit() {
    // todo refactor this to resolve to fix going back after login.
    this._auth.handleAuthentication();
  }

  public login() {
    this._auth.login();
  }
}
