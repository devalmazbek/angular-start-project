import { Component, inject, Input } from '@angular/core';

import { type TaskItem } from '../task.model';

import { TasksService } from '../task.service';

@Component({
  selector: 'app-task-item',
  standalone: false,
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
