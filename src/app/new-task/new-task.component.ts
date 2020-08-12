import { TaskService } from './../task.service';
import { LoggingService } from './../logging.service';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from './../task';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'] 
})
export class NewTaskComponent implements OnInit {
  newTaskID: number ; 
  newTask: Task = {
    taskID: this.newTaskID, 
    taskField: '', 
    taskCate: '',
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
    //retrieve ID from CategoryComponent
    //this.newTaskID = this.route.snapshot.params['id'];
    // Before ng 6 
    this.route.queryParamMap.subscribe(params => {
      this.newTask.taskID = params['params']['id'];//its supposed to be params['id']
    });

    //evenEmitter using Service 
    this.taskService.onEmitNewTask(this.newTask);//emit the new event of this component

    const logAdded = new LoggingService();
    logAdded.logAddedTask(this.newTask.taskID, this.newTask.taskField);
  }

  /*
  navigateToCategories(){
    
    This will work but it needs to call a function: Event Emitter ==> doesn't do anything
    this.router.navigate(['/categories'], 
      {queryParams:{ taskID : this.newTaskID,
        taskField: this.newTask.taskField, 
        taskCate: this.newTask.taskCate, 
        deadline: this.newTask.deadline,
        taskStatus: this.newTask.taskStatus

    }});
  }
    */

  noDate(){
    console.log('This task has no deadline'); 
  }
  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private taskService: TaskService
    ) { }

  ngOnInit(): void {
  }

}
