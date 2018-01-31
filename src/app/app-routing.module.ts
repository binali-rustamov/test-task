import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './Tasks/tasks/tasks.component';
import { TaskCreateComponent } from './Tasks/task-create/task-create.component';
import { TaskDetailComponent } from './Tasks/task-detail/task-detail.component';
import { TaskDeleteComponent } from './Tasks/task-delete/task-delete.component';
import { TaskEditComponent } from './Tasks/task-edit/task-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch:'full'},
  {path: 'tasks', component: TasksComponent },
  {path: 'create', component: TaskCreateComponent },
  {path: 'detail/:id', component: TaskDetailComponent },
  {path: 'delete/:id', component: TaskDeleteComponent },
  {path: 'edit/:id', component: TaskEditComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class AppRoutingModule { }
