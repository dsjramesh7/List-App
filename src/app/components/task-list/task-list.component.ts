import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // code here
  public taskList:string[]=["Watch OnePiece","Play Cricket"]

  // for removing task
  public deleteTaskfunc(i:number):void{
    this.taskList.splice(i,1)
  }


}
