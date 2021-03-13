import { Component, OnInit, OnDestroy } from '@angular/core';
import { nanoid } from 'nanoid';
import { TodoItem } from 'src/models/TodoItem';
import { TodoStatus } from 'src/models/TodoStatus';
import { TodoService, ITodoObserver } from 'src/services/TodoService';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy, ITodoObserver {
  private todoService: TodoService

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  // Basically maintaining a dictionary of item objects here.
  // This is duplicating the functionality of TodoService,
  // but not sure how to not do this without data binding.
  // The copy here is for now just for rendering purposes,
  // the source of truth is in TodoService.
  todoList: {[id: string]: TodoItem} = {}

  private observerId: string = ""
  onItemChanged(item: TodoItem) {
    this.todoList[item.id] = item
  }
  onItemRemoved(itemId: string) {
    delete this.todoList[itemId]
  }

  ngOnInit(): void {
    this.observerId = this.todoService.addObserver(this)
  }

  ngOnDestroy(): void {
    this.todoService.removeObserver(this.observerId)
  }
}
