export enum TodoStatus {
    Done = "Done",
    InProgress = "In Progress",
    NotStarted = "Not Started"
}

// Ref: https://stackoverflow.com/a/53686606
export const TodoStatusLabels: Record<TodoStatus,string> = {
    [TodoStatus.Done]: "Done",
    [TodoStatus.InProgress]: "In Progress",
    [TodoStatus.NotStarted]: "Not Started"
}