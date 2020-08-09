import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() mockTask: Task = {
    taskID: 0, 
    taskField: 'Mock something'
  }

  @Output() deletedTask = new EventEmitter<{
      taskID: number, 
      taskField: string, 
      taskCate: string, 
      deadline: Date
  }>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTask(){
    this.deletedTask.emit({
        taskID: this.mockTask.taskID, 
        taskField: this.mockTask.taskField, 
        taskCate: this.mockTask.taskCate, 
        deadline: this.mockTask.deadline 
    });
  }

  onCompleteTask(){
    this.deletedTask.emit({
        taskID: this.mockTask.taskID, 
        taskField: this.mockTask.taskField, 
        taskCate: this.mockTask.taskCate, 
        deadline: this.mockTask.deadline 
    });
  }
  
  

}
