import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input ('task') Task: {
    taskID: number, 
    taskField: string, 
    taskCate?: string, 
    deadline?: Date 
  } 
  
  mockTask = {
    taskID: 0, 
    taskField: 'Mock something'
  }
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    console.log("Delete this task!");
  }

  completeTask(){
    console.log(`This ${this.mockTask.taskField} has been completed`);
  }
  
  

}
