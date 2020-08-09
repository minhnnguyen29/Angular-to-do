import { Component, OnInit } from '@angular/core';
import { Task } from './../task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  newTask: Task = {
    taskID: 1, 
    taskField: 'Hi', 
    deadline: new Date()
  }; 
  createTask(){
    console.log(`This ${this.newTask.taskField} has been created with deadline: ${this.newTask.deadline}`);
  }
  noDate(){
    console.log('This task has no deadline'); 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
