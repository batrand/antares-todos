import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
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

  public itemForm = new FormGroup({
    titleFormControl: new FormControl(),
    statusFormControl: new FormControl(),
    dueFormControl: new FormControl('', [this.validateTimeNotInThePast(this.newDue)])
  });

  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  ngOnInit(): void {
    // Put tomorrow as default due date
    this.newDue = new Date();
    this.newDue.setDate(this.newDue.getDate() + 1);
  }

  addItem() {
    console.log(`Called add item, ${this.newTitle} ${this.newStatus} ${this.newDue}`)
    let newItem = new TodoItem(this.newTitle, this.newDue, this.newStatus as TodoStatus);
    console.log(`New item: ${newItem}`);
    this.todoService.add(newItem);
  }

  validateTimeNotInThePast(due: Date): ValidatorFn {
    return (control: AbstractControl): {[error: string]: boolean}|null => {
      let datetime = control.value as Date;
      let now = new Date();
      if (datetime < now) return {"Cannot set due date in the past": true}
      return null
    }
  }
}
