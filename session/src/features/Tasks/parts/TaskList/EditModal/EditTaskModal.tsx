import {type FC, useState} from 'react';
import styles from './EditTaskModal.module.css'
import type {Task} from "../../../../../types/Task.ts";

interface EditTaskModalProps{
    isOpen: boolean,
    onClose: () => void,
    task: Task,
    onSave: (id: number, title: string, description: string) => void
}

const EditTaskModal: FC<EditTaskModalProps> = (props) => {
    const { task, onClose, onSave } = props

    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description ?? '')

    function handleSave() {
        const trimmedTitle = title.trim()
        if (!trimmedTitle) return

        onSave(task.id, trimmedTitle, description.trim())
        onClose()
    }
    return (
        <div
            className={styles.overlay}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose()
            }}
        >
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Редактировать задачу</h2>
                    <button type="button" className={styles.closeBtn} onClick={onClose}>×</button>
                </div>

                <label className={styles.field}>
                    Название
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Моя задача"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label className={styles.field}>
                    Описание
                    <textarea
                        className={styles.textarea}
                        placeholder="Добавьте описание задачи..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <div className={styles.footer}>
                    <button type="button" className={styles.cancelBtn} onClick={onClose}>Отмена</button>
                    <button type="button" className={styles.saveBtn} onClick={handleSave}>Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default EditTaskModal;
