import { nanoid } from "nanoid";
import { TodoStatus } from "./TodoStatus";

export class TodoItem {
    public id: string;
    public title: string;
    public due: Date;
    public status: TodoStatus;

    constructor(title: string, due: Date, status: TodoStatus){
        this.id = nanoid(7);
        this.title = title;
        this.due = due;
        this.status = status
    }

    static defaultItem(): TodoItem {
        return new TodoItem("Untitled", new Date(), TodoStatus.NotStarted)
    }
}