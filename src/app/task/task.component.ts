import { Component, OnInit } from '@angular/core';
import { Task } from './../task';//import task interface

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task = {
    taskID: 1, 
    taskField: '',
    taskCate: 'undefined',
    deadline: new Date()
  };
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    console.log("Delete this task!");
  }

  completeTask(){
    console.log(`This ${this.task.taskField} has been completed`);
  }
  
  createTask(){
    console.log(`This ${this.task.taskField} has been created `);
  }
  noDate(){
    console.log('This task has no deadline'); 
  }

}
