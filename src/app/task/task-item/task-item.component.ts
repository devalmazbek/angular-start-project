import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type TaskItem } from '../task.model';
import { CardComponent } from "../../shared/card/card.component";

import { TasksService } from '../task.service';

@Component({
  selector: 'app-task-item',
  imports: [CardComponent, DatePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!:TaskItem;

  private taskService = inject(TasksService);

  onCompleteTask() {
    // this.complete.emit(this.task.id);

    this.taskService.completeTask(this.task.id);
  }



}
