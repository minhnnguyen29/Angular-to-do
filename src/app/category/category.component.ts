import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from './../task'; 

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent implements OnInit {

  categorisedTasks: Task[] = [
    {taskID: 1, taskField: 'Clean', taskStatus: 'To-Do'},
    {taskID: 2, taskField: 'Wipe', taskStatus: 'To-Do'}
  ]

  completedTasks: Task[] = [

  ]; 

  newID: number = 1; 

  newTask: Task; 



  constructor(
              private router: Router, 
              private route: ActivatedRoute) { }
  ngOnInit(): void {

  }

  getNewID() {
    if(this.categorisedTasks.length > 0){
      this.newID = this.categorisedTasks[this.categorisedTasks.length - 1].taskID + 1;
    }
    this.navigateToNewTask();//navigate with newID
    
  }

  navigateToNewTask(){
    this.router.navigate(['/create-task'], {queryParams: {id: this.newID}});//pass router parameter 
  }

  onAddedTask(){
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
    
    this.categorisedTasks.push({
      taskID: this.newTask.taskID, 
      taskField: this.newTask.taskField, 
      deadline: this.newTask.deadline, 
      taskCate: this.newTask.taskCate, 
      taskStatus: this.newTask.taskStatus
    })
  }

  onDeletedTask(TaskData: Task){
    let ids, index; 
    //get ids of all tasks 
    ids = this.categorisedTasks.map(function(curr){
      return curr.taskID; 
    });

    index = ids.indexOf(TaskData.taskID);//get index of the task that has that task ID 
    if(index !== -1){
      this.categorisedTasks.splice(index, 1);//remove the task that has that id
    }
  }

  onCompletedTask(TaskData: Task){
    console.log(TaskData);
    this.completedTasks.push({
      taskID: TaskData.taskID, 
      taskField: TaskData.taskField, 
      taskCate: TaskData.taskCate,
      deadline: TaskData.deadline, 
      taskStatus: 'Done'
    });
    console.log(this.completedTasks); 

    this.onDeletedTask(TaskData);//delete it from the array 
  }

}
