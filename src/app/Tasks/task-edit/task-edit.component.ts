import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Task, TaskService, Level } from '../task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  public task: Task;
  levels: Level[] = [Level.High, Level.Low, Level.Medium];
  title: string = "";
  text: string = "";
  priority: Level = Level.High;
  completed: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private service: TaskService
  ) {}

  getTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.task = this.service.getTask(parseInt(id));
    this.title = this.task.title;
    this.text = this.task.text;
    this.priority = this.task.priority;
    this.completed = this.task.completed;
  }

  editTask() {
    this.task.title = this.title;
    this.task.text = this.text;
    this.task.priority = this.priority;
    this.task.completed = this.completed;

    this.service.editTask(this.task);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.getTask();
  }

}
