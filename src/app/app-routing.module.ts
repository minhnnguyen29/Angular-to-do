import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { CategoryComponent } from './category/category.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'}, 
  {path: 'dashboard', component: DashboardComponent},
  {path: 'task/:id', component: TaskComponent}, 
  {path: 'categories', component: CategoryComponent},
  {path: 'create-task', component: NewTaskComponent} 
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
