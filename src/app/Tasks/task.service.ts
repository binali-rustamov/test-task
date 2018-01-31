import { Injectable } from '@angular/core';

export enum Level { High = "High", Medium="Medium", Low="Low" };

export class Task {
  id: number;
  title: string;
  text: string;
  priority: Level;
  completed: boolean;

  constructor() {}
}

@Injectable()
export class TaskService {

  private taskList: Task[] = [];

  constructor() {/*
    for (let i=0; i<10; i++){
      let t = new Task();
      t.id = i;
      t.title = 'Title'+i;
      t.text = 'Text'+i;
      t.priority = Level.High;
      t.completed = false;
      this.taskList.push(t);
    }*/
   }

  getTasks(): Task[] {
    return this.readTasks();
  }

  getTask(id: number): Task {
    return this.taskList.filter(x => x.id==id)[0];
  }

  addTask(task: Task): void {
    if (this.taskList.length > 0) {
      let lastId = this.taskList[this.taskList.length-1].id;
      task.id = ++lastId;
    }
    else {
      task.id = 0;
    }
    task.completed = false;
    this.taskList.push(task);
    this.saveTasks();
  }

  editTask(task: Task): void {
    let item = this.getTask(task.id);
    item.title = task.title;
    item.text = task.text;
    item.completed = task.completed;
    //Todo: add save
    this.saveTasks();
  }

  deleteTask(id: number): void {
    let item = this.getTask(id);
    let index = this.taskList.indexOf(item);
    this.taskList.splice(index, 1);
    //Todo: change location
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }

  readTasks(): Task[]{
    this.taskList = [];
    let data = localStorage.getItem("taskList");
    console.log(data);
    if (data != null) {
      this.taskList = JSON.parse(data);
    }
    else  
      this.taskList = [];
    return this.taskList;
  }
}
