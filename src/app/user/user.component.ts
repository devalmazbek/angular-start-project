import { Component, signal, computed, Input, input, Output, EventEmitter } from '@angular/core';

import {DUMMY_USERS} from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  // moder way
  // avatar = input.required<string>();
  // name = input.required<string>();
  // moder way
  // imagePath = computed(() => {
  //   return '/assets/users/' + this.avatar();
  // })

  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(() => '/assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return '/assets/users/' + this.selectedUser.avatar
  // }
  // without signal

  // onSelectUser() {
  //   this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
  // }

  

  get imagePath() {
    return '/assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }

}
