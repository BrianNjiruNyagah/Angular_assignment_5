import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersServiceService } from '../users-service.service';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private userService: UsersServiceService){
    this.users = userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }

}
