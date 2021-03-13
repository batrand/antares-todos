import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from 'src/models/TodoItem';
import { TodoService } from 'src/services/TodoService';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem = TodoItem.defaultItem();

  private todoService: TodoService;
  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  ngOnInit(): void {}

  deleteItem() {
    this.todoService.remove(this.item.id);
  }
}
