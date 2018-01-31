import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskService } from '../task.service';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})

export class TaskDetailComponent implements OnInit {
  public task: Task;
  
  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private service: TaskService
  ) {}

  getTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.task = this.service.getTask(parseInt(id));
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.getTask();
  }

}
