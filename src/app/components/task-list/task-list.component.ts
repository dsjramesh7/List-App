import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public taskService:TaskService) { }
  

  ngOnInit(): void {
  }

  // code here
  public taskList:string[]=[]

  


  // for removing task
  public deleteTaskfunc(i:number):void{
    this.taskService.deleteTask(i)
  }


}
