/**
 * Created by matth on 6/2/2017.
 */
import {Injectable} from '@angular/core';
import auth0 from "auth0-js";
import {Router} from "@angular/router";

// TODO(matth) refactor this to router resolves.

@Injectable()
export class LoginService {
  private _auth:auth0;
  private _connection:any;

  constructor(private _router: Router) {
    this._auth = auth0;
    this._init()
  }

  private _init() {
    this._connection = this._createConnection();
    console.log(this._connection);
  }

  private _createConnection() {
    return new this._auth.WebAuth({
      clientID: '3ZlSWZfxOGPgsgtrvAKwH8xaIVYKarIw',
      domain: 'matthewharwood.auth0.com',
      responseType: 'token id_token',
      audience: 'https://matthewharwood.auth0.com/userinfo',
      redirectUri: 'http://localhost:4200/callback',
      scope: 'openid',
      leeway: 30,
    });
  }


  public login(): void {
    this._connection.authorize();
  }

  public handleAuthentication(): void {
    this._connection.parseHash((err, authResult) => {

      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this._router.navigate(['dashboard'])
      } else if (err) {
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this._router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
