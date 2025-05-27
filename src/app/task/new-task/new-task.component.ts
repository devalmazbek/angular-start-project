import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskData } from '../task.model';

@Component({
  selector: 'app-new-task',
  imports: [ FormsModule ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
 @Output() close = new EventEmitter<void>();
 @Output() create = new EventEmitter<TaskData>();
 enteredTitle = '';
 enteredSummary = '';
 enteredDate="";
//  @Output() create = new EventEmitter<{ title: string; summary: string; dueDate: string }>();

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.create.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }
    )
  }
}
