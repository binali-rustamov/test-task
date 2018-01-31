import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Task, TaskService } from '../task.service';


@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {
  public taskId: number;


  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private service: TaskService
  ) {}
  
  getTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskId = parseInt(id);
  }

  deleteTask(){
    this.service.deleteTask(this.taskId);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.getTask();
  }
}
