import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type {CompletedTask} from "../../../types/CompletedTask.ts";
import type {Task} from "../../../types/Task.ts";

interface ICompletedTasksStore {
    completedTasks: CompletedTask[],

    addCompletedTask: (task: Task, durationMinutes: number) => void
}

export const useCompletedTasksStore = create<ICompletedTasksStore>()(
    persist(
        set => ({
            completedTasks: [],

            addCompletedTask: (task, durationMinutes) => {
                const now = Date.now()

                const newTask: CompletedTask = {
                    id: now,
                    taskId: task.id,
                    taskTitle: task.title,
                    finishedAt: now,
                    durationMinutes: durationMinutes
                }

                set(state => ({completedTasks: [newTask, ...state.completedTasks]}))
            }
        }),
        {name: 'focus-session:completedTasks'}
    )
)