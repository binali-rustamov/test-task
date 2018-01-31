import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  taskList: Task[] = [];
  constructor(private service: TaskService) { }

  ngOnInit() {
    let tempTaskList = this.service.getTasks();
    let nonCompletedTaskList = tempTaskList.filter(x => x.completed == false);
    let completedTaskList = tempTaskList.filter(x => x.completed == true);
    
    var arr = [];

    nonCompletedTaskList.forEach(x => arr.push(x));
    completedTaskList.forEach(x => arr.push(x));
    
    this.taskList = arr;    
    //#console.log('arr', this.taskList); 
  }

}
