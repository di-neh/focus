import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type {Task} from '../../../types/Task.ts';

interface ITaskStore {
    tasks: Task[]
    selectedTaskId: number | null

    addTask: (title: string) => void
    deleteTask: (id: number) => void
    setCompleted: (id: number) => void
    editTask: (id: number, title: string, description: string) => void
    selectTask: (id: number) => void
}

export const useTaskStore = create<ITaskStore>()(
    persist(
        (set => ({
            tasks: [],
            selectedTaskId: null,

            addTask: (title) => {
                const trimmedTitle = title.trim()
                if (!trimmedTitle) return

                const newTask: Task = {
                    id: Date.now(),
                    title: trimmedTitle,
                    isComplete: false,
                }

                set(state => ({ tasks: [...state.tasks, newTask] }))
            },

            deleteTask: (id) => {
                set(state => ({tasks: state.tasks.filter(item => item.id !== id)}))
            },

            setCompleted: (id) => {
                set(state => ({tasks: state.tasks.map(task =>
                        task.id === id  ? {...task, isComplete: !task.isComplete} : task
                    )}))
            },

            editTask: (id, title, description) => {
                set(state => ({tasks: state.tasks.map((task =>
                            task.id === id  ? {...task, title: title, description: description} : task
                    ))}))
            },
            selectTask: (id) => {
                set({selectedTaskId: id})
            }
        })
    ),
    {name: 'focus-session:tasks'}
))