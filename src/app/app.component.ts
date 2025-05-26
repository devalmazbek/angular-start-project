import { Component, signal  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy-users';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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

  onSelectUser(id: string) {
    this.selectedUserId = id;
    this.selectedUserItem = DUMMY_USERS.find((user) => user.id === id);
  }

}
