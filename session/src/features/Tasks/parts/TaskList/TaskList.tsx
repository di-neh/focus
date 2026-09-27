import type {FC} from "react";
import TaskItem from "./TaskItem/TaskItem.tsx";
import type {Task} from "../../../../types/Task.ts";

interface TaskListProps{
    tasks: Task[],
    setCompleted:  (id: number) => void,
    deleteTask: (id: number) => void,
    editTask: (id: number, title: string, description: string) => void
    setFocusTask: (id: number) => void
}

const TaskList: FC<TaskListProps> = (props) => {
    const { tasks, setCompleted, deleteTask, editTask, setFocusTask } = props

    if (tasks.length === 0) return <div>Нет задач</div>

    return (
        <div style={{width: '100%', display: 'flex', gap: '8px', flexDirection: 'column'}}>
            {
                tasks.map((task) => (
                    <TaskItem
                        setFocusTask={setFocusTask}
                        setCompleted={setCompleted}
                        key={task.id} task={task}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                ))
            }
        </div>
    );
};

export default TaskList;