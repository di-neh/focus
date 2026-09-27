import type {CompletedTask} from "../../../types/CompletedTask.ts";

export function isToday(date: number) {
    const now = new Date()
    return new Date(date).toDateString() === now.toDateString()
}

export function colTodayCounter(tasks: CompletedTask[]) {
    return tasks.filter(task => {
        return isToday(task.finishedAt)
    }).length
}