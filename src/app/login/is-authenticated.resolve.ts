/**
 * Created by matth on 6/6/2017.
 */
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "./login.service";


@Injectable()
export class IsAuthenticated implements CanActivate {
  constructor(private _auth: LoginService,private _router: Router) {
  }

  canActivate() {

    if (this._auth.isAuthenticated()) {
      this._router.navigate(['/dashboard']);
      return true;
    }
    else {
      this._router.navigate(['/']);
    }

    return false;
  }
}
