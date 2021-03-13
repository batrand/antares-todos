import { Injectable } from "@angular/core";
import { nanoid } from "nanoid";
import { TodoItem } from "src/models/TodoItem";


@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private observers: {[id: string]: ITodoObserver} = {}
    public addObserver(observer: ITodoObserver): string {
        let observerId = nanoid(7)
        this.observers[observerId] = observer
        return observerId
    }
    public removeObserver(id: string) {
        if(id in this.observers) {
            delete this.observers[id]
        }
    }
    public notifyObserversItemChanged(item: TodoItem) {
        for(let id in this.observers) {
            let observer = this.observers[id]
            observer.onItemChanged(item)
        }
    }
    public notifyObserversItemRemoved(itemId: string) {
        for(let id in this.observers) {
            let observer = this.observers[id]
            observer.onItemRemoved(itemId)
        }
    }
    
    private todoList: {[id: string]: TodoItem} = {}

    public add(item: TodoItem) {
        this.todoList[item.id] = item
        this.notifyObserversItemChanged(item)
    }

    public remove(id: string) {
        if(id in this.todoList) {
            delete this.todoList[id]
            this.notifyObserversItemRemoved(id)
        }
    }

    public getItem(id: string): TodoItem|null {
        if(id in this.todoList) {
            return this.todoList[id]
        }
        else return null
    }
}

export interface ITodoObserver {
    onItemChanged(item: TodoItem): void;
    onItemRemoved(id: string): void;
}