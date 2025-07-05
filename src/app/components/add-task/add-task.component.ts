import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //code here
  public task:string = "";
  public addTaskFunc():void{
    console.log("clci")
  }

}
