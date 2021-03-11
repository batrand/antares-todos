import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';
import { TodoItem } from 'src/models/TodoItem';
import { TodoStatus } from 'src/models/TodoStatus';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  item: TodoItem;

  constructor() { 
    this.item = new TodoItem(nanoid(7), "Test title", new Date(),  TodoStatus.NotStarted)
  }

  ngOnInit(): void {
  }

}
