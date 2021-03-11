import { TodoItem } from "src/models/TodoItem";

export class TodoService {
    private todoList: Array<TodoItem> = []   
    
    public add(item: TodoItem) {
        let existingIndex = this.todoList.findIndex(t => t.id == item.id)
        
        if (existingIndex == -1) {
            this.todoList.push(item)
        }

        // If is the same, replace item
        else {
            this.todoList[existingIndex] = item
        }

        // TODO: emit changed
    }

    public remove(id: string) {
        let existingIndex = this.todoList.findIndex(t => t.id == id)
        
        if (existingIndex != -1) {
            this.todoList.splice(existingIndex, 1)
        }

        // TODO: emit changed
    }
}