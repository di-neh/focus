import {type FC, useState} from 'react';
import EditIcon from "../../../../../assets/icons/EditIcon.tsx";
import DeleteIcon from "../../../../../assets/icons/DeleteIcon.tsx";
import styles from './TaskItem.module.css'
import type {Task} from "../../../../../types/Task.ts";
import EditTaskModal from "../EditModal/EditTaskModal.tsx";
import BrainIcon from "../../../../../assets/icons/BrainIcon.tsx";

interface TaskItemProps{
    task: Task,
    setCompleted:  (id: number) => void,
    deleteTask: (id: number) => void,
    editTask: (id: number, title: string, description: string) => void
    setFocusTask: (id: number) => void
}

const TaskItem: FC<TaskItemProps> = (props) => {
    const { task, setCompleted, deleteTask, editTask, setFocusTask } = props
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div
            className={`${styles.taskContainer} ${isActive && styles.active}`}

        >
            <div className={styles.taskElement}>
                <input
                    type="checkbox"
                    checked={task.isComplete}
                    onChange={() => {
                        setCompleted(task.id)
                    }}/>
                <div
                    className={styles.textContainer}
                    onClick={() => setIsActive(!isActive)}
                >
                    <div className={`${task.isComplete && styles.completed}`}>{task.title}</div>
                    {isActive && <div className={styles.taskDescription}>{task.description}</div>}
                </div>

            </div>
            <div className={styles.taskElement}>
                <div onClick={() => setFocusTask(task.id)} style={{cursor: "pointer"}}>
                    <BrainIcon/>
                </div>
                <EditIcon
                    onOpen={openModal}
                />
                <DeleteIcon
                    deleteTask={deleteTask}
                    id={task.id}
                />
            </div>
            {isOpen && (
                <EditTaskModal isOpen={isOpen} onClose={closeModal} task={task} onSave={editTask} />
            )}
        </div>
    );
};

export default TaskItem;