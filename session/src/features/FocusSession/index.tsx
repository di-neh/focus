import styles from './FocusSession.module.css'
import Timer from "./Timer/Timer.tsx";
import {type FC} from "react";
import type {Task} from "../../types/Task.ts";
import type {FocusSessionApi} from "../../hooks/useFocusSession.ts";

interface FocusSessionProps{
    task?: Task
    session: FocusSessionApi
}

const FocusSession:FC<FocusSessionProps> = (props) => {
    const {task, session} = props

    return (
        <div className={styles.wrapper}>
            <span>Фокус-сессия</span>
            <span>{session.phase}</span>
            <span>{task?.title || 'Выберите задачу'}</span>
            <span className={styles.descriptionText}>{task?.description || 'Новое описание'}</span>
            <Timer session={session}/>
            <span className={styles.descriptionText}>Сессий завершено: {session.completedInCycle}</span>
        </div>
    );
};

export default FocusSession;