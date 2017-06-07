import {Component} from "@angular/core";
import { LoginService } from '../login/login.service';
/**
 * Created by matth on 6/6/2017.
 */

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private _auth:LoginService){}

  public logout() {
    this._auth.logout();
  }
}
