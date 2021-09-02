import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() showAction = new EventEmitter<boolean>();
  showList = true;
  avatars = [
    'assets/01.png',
    'assets/02.png',
    'assets/03.png',
    'assets/04.png',
    'assets/05.png',
    'assets/06.png',
    'assets/07.png',
    'assets/08.png',
    'assets/09.png',
    'assets/10.png',
    'assets/11.png',
    'assets/12.png'
  ];

  constructor(
    public wsService: WebsocketService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.wsService.logoutWebSocket();
  }

  showUserList(): void {
    this.showList = !this.showList;
    this.showAction.emit(this.showList);
  }
}
