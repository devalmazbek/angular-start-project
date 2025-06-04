import { NgModule } from "@angular/core";
import { TaskComponent } from "./task.component";
import { TaskItemComponent } from "./task-item/task-item.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [TaskComponent, TaskItemComponent, NewTaskComponent],
    exports: [TaskComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})

export class TaskModule {

}