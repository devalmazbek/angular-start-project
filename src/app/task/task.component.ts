import { Component, Input } from '@angular/core';
import { TaskItemComponent } from "./task-item/task-item.component";

import { TaskData, type TaskItem } from './task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './task.service';

@Component({
  selector: 'app-task',
  imports: [TaskItemComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  isOpenModal: boolean = false;
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string | undefined;

  constructor(private taskService: TasksService){}

  get selectedUserTasks() {
    return this.taskService.selectUserTask(this.userId)
  }

  onOpenModal() {
    this.isOpenModal = true;
  }

  onCloseModal() {
    this.isOpenModal = false;
  }
}
