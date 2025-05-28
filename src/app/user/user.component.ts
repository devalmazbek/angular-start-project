import { Component, signal, computed, Input, input, Output, EventEmitter } from '@angular/core';

import { type User } from './user.model';

import {DUMMY_USERS} from './dummy-users';
import { CardComponent } from '../shared/card/card.component';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User;
  @Input({required: true}) selectedUser!: boolean;
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
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
