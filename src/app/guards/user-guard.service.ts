import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {WebsocketService} from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(
    private wsService: WebsocketService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.wsService.getUser()) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
