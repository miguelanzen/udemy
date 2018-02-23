import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  @Output() userSetToInactive = new EventEmitter<number>();

  actions = 0;

  constructor(private usersService: UsersService ) {}

  users: string[] = this.usersService.activeUsers;

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.actions = this.usersService.toInactiveCounter;
  }
}
