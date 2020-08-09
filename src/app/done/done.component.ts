import { Component, OnInit } from '@angular/core';
import { Task } from './../task';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  completedTasks: Task[];

  constructor() { }

  ngOnInit(): void {
  }

  onDoneTask(TaskData: Task){
    this.completedTasks.push({
      taskID: TaskData.taskID, 
      taskField: TaskData.taskField, 
      taskCate: TaskData.taskCate,
      deadline: TaskData.deadline
    })
  }

}
