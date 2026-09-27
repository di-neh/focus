import {type FC, useState} from "react";
import styles from './Tasks.module.css'
import TaskList from "./parts/TaskList/TaskList.tsx";
import FilterButtons from "./parts/FilterButtons/FilterButtons.tsx";
import type {FilterBtn} from "../../types/FilterBtn.ts";
import {useTaskStore} from "./store/TaskStore.ts";

interface TasksProps{
    setFocusTask: (id: number) => void
}

const Tasks: FC<TasksProps> = (props) => {
    const { setFocusTask } = props

    const tasks = useTaskStore(state => state.tasks)
    const addTask = useTaskStore(state => state.addTask)
    const setCompleted = useTaskStore(state => state.setCompleted)
    const deleteTask = useTaskStore(state => state.deleteTask)
    const editTask = useTaskStore(state => state.editTask)

    const [title, setTitle] = useState<string>('')
    const [filter, setFilter] = useState<FilterBtn>('all')

    const filteredTasks = tasks.filter((task) => {
        switch (filter) {
            case "active":
                return !task.isComplete
            case "completed":
                return task.isComplete
            default:
                return true
        }
        }
    )

    function handleAddTask() {
        addTask(title)
        setTitle('')
    }

    function setBtnFilter(filter: FilterBtn) {
        setFilter(filter)
    }


    return (
        <div className={styles.tasksWrapper}>
            <span>Задачи</span>
            <div className={styles.inputZone}>
                <input
                    type="text"
                    placeholder="Добавить новую задачу..."
                    className={styles.plusInput}
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <button
                    className={styles.plusBtn}
                    onClick={handleAddTask}
                >+</button>
            </div>
            <FilterButtons
                filter={filter}
                setFilter={setBtnFilter}
            />
            <TaskList
                setCompleted={setCompleted}
                tasks={filteredTasks}
                deleteTask={deleteTask}
                editTask={editTask}
                setFocusTask={setFocusTask}
            />

        </div>
    );
};

export default Tasks;