import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  @Output() userSetToActive = new EventEmitter<number>();

  actions = this.usersService.toActiveCounter;

  constructor(private usersService: UsersService ) {}

  users: string[] = this.usersService.inactiveUsers;

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.actions = this.usersService.toActiveCounter;
  }
}
