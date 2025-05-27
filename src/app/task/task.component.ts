import { Component, Input } from '@angular/core';
import { TaskItemComponent } from "./task-item/task-item.component";

import { TaskData, type TaskItem } from './task.model';
import { NewTaskComponent } from "./new-task/new-task.component";

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

  taskItem: TaskItem[] = [
    {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
    },
    {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
    },
    {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks() {
    return this.taskItem.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.taskItem = this.taskItem.filter((task) => task.id !== id);
  }

  onOpenModal() {
    this.isOpenModal = true;
  }

  onCloseModal() {
    this.isOpenModal = false;
  }

   onAddTask(taskData: TaskData) {
    const newItem = {
      id: Date.now().toString(),
      userId: this.userId,
      ...taskData,
    }

    this.taskItem = [...this.taskItem, newItem];

    this.onCloseModal();
  }
}
