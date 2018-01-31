import { Component, OnInit } from '@angular/core';
import { Level, Task, TaskService } from '../task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  
  levels: Level[] = [Level.High, Level.Low, Level.Medium];
  title: string = "";
  text: string = "";
  priority: Level = Level.High;

  constructor(private taskService: TaskService, private location: Location) { }

  goBack() {
    this.location.back();
  }

  createTask(){
    let task = new Task();
    task.title = this.title;
    task.text = this.text;
    task.priority = this.priority;
    this.taskService.addTask(task);
    this.goBack();
  }

  ngOnInit() {
  }

}
