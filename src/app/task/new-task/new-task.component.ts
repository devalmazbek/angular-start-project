import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskData } from '../task.model';
import { TasksService } from '../task.service';

@Component({
  selector: 'app-new-task',
  imports: [ FormsModule ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate=""; 

  private tastService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tastService.addTask(
      {title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate},
      this.userId);
    
    this.onClose()
  }


}
