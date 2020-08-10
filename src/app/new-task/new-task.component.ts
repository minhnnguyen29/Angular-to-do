import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Task } from './../task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'] 
})
export class NewTaskComponent implements OnInit {
  @Input() newTaskID: number ; 
  newTask: Task = {
    taskID: this.newTaskID, 
    taskField: '', 
    deadline: new Date(), 
    taskStatus: 'To-Do'
  }; 

  @Output() addedTask = new EventEmitter<{
                                taskID: number, 
                                taskField: string, 
                                taskCate: string,
                                deadline: Date, 
                                taskStatus: string
  }>(); 

  onAddTask(){
    this.addedTask.emit({taskID : this.newTaskID,
                        taskField: this.newTask.taskField, 
                        taskCate: this.newTask.taskCate, 
                        deadline: this.newTask.deadline,
                        taskStatus: this.newTask.taskStatus
                        });//emit the new event of this component
    console.log(this.newTask);
  }

  noDate(){
    console.log('This task has no deadline'); 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
