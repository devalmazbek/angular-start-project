import { Component, signal  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-start-project';
  
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

}
