import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoItem } from 'src/models/TodoItem';
import { TodoStatus, TodoStatusLabels } from 'src/models/TodoStatus';
import { TodoService } from 'src/services/TodoService';

@Component({
  selector: 'new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  public statusLabels = TodoStatusLabels;
  public statusTypes = Object.values(TodoStatus);

  public newTitle: string = "";
  public newStatus: string = this.statusLabels[TodoStatus.NotStarted]; // Haven't figured out how to do 2way enum binding
  public newDue: Date = new Date();

  public datetimeControl = new FormControl();
  public minDateTime = Date(); // cannot create Todos in the past

  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  ngOnInit(): void {
  }

  addItem() {
    console.log(`Called add item, ${this.newTitle} ${this.newStatus} ${this.newDue}`)
    let newItem = new TodoItem(this.newTitle, this.newDue, this.newStatus as TodoStatus);
    console.log(`New item: ${newItem}`);
    this.todoService.add(newItem);
  }

}
