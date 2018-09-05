import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: Array<User>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getUser().subscribe(res => {
      this.users = res;
    });
  }
}
