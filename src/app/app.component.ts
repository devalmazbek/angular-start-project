import { Component, signal  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-start-project';
  users = DUMMY_USERS;
  selectedUserId: string | null = null;
  selectedUserItem: any = null;
  
  userName = signal('test');

  list = [
    {id: 1, title: 'test'},
    {id: 2, title: 'test2'},
    {id: 3, title: 'test3'},
  ];

  changeSignal(event: Event) {
    this.userName.set('test1');
    console.log(this.userName);
  }

  get selectUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

}
