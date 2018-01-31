import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksComponent } from './Tasks/tasks/tasks.component';
import { TaskDetailComponent } from './Tasks/task-detail/task-detail.component';
import { TaskEditComponent } from './Tasks/task-edit/task-edit.component';
import { TaskDeleteComponent } from './Tasks/task-delete/task-delete.component';
import { TaskCreateComponent } from './Tasks/task-create/task-create.component';
import { AppRoutingModule } from './/app-routing.module';
import { TaskService } from './Tasks/task.service';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    TaskEditComponent,
    TaskDeleteComponent,
    TaskCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
