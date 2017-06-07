/**
 * Created by matth on 6/6/2017.
 */
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "./login.service";


@Injectable()
export class IsAuthenticated implements CanActivate {
  constructor(private _auth: LoginService, private _router: Router) {
  }

  canActivate() {
    const redirect = () => {
      this._router.navigate([ '/' ]);
      return false;
    };

    return this._auth.isAuthenticated() ? true : redirect();
  }
}
