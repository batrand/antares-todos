import { TodoStatus } from "./TodoStatus";

export class TodoItem {
    constructor(
        public id: string,
        public title: string,
        public due: Date,
        public status: TodoStatus
    ){}
}