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

  public datetimeControl = new FormControl()
  public minDateTime = Date() // cannot create Todos in the past

  constructor() { }

  ngOnInit(): void {
  }

}
