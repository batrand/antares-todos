import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';
import { TodoItem } from 'src/models/TodoItem';
import { TodoStatus } from 'src/models/TodoStatus';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: TodoItem[];

  constructor() {
    this.items = [
      new TodoItem("Test title 1", new Date(),  TodoStatus.NotStarted),
      new TodoItem("Test title 2", new Date(),  TodoStatus.NotStarted)
    ]
   }

  ngOnInit(): void {
  }

}
