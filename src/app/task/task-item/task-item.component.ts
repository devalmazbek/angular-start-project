import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type TaskItem } from '../task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task-item',
  imports: [CardComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!:TaskItem;
  @Output() complete = new EventEmitter<string>(); 

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }


}
