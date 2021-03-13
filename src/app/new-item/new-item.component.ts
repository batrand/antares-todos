import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoStatus, TodoStatusLabels } from 'src/models/TodoStatus';

@Component({
  selector: 'new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  public statusLabels = TodoStatusLabels;
  public statusTypes = Object.values(TodoStatus);

  public newTitle: String = "";
  public newStatus: String = this.statusLabels[TodoStatus.NotStarted]; // Haven't figured out how to do 2way enum binding
  public newDue: Date = new Date();

  public datetimeControl = new FormControl()
  public minDateTime = Date() // cannot create Todos in the past

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    console.log(`Called add item, ${this.newTitle} ${this.newStatus} ${this.newDue}`)
  }

}
