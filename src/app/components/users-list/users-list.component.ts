import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Output()
  myAvatar = new EventEmitter<number>();
  activeUsersObs: Observable<any>;
  selectedAvatar = '';
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
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.activeUsersObs = this.chatService.getActiveUsers();
    this.chatService.emitActiveUsers();
  }
}
