import { Component, OnInit, Input } from '@angular/core';
import { nanoid } from 'nanoid';
import { TodoItem } from 'src/models/TodoItem';
import { TodoStatus } from 'src/models/TodoStatus';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem = TodoItem.defaultItem();

  constructor() { }

  ngOnInit(): void {
  }

}
