import styles from './StatsTasks.module.css'
import {useCompletedTasksStore} from "../../store/CompletedTasksStore.ts";

function formatFinishedAt(timestamp: number): string {
    return new Date(timestamp).toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    })
}

const StatsTasks = () => {

    const completedTasks = useCompletedTasksStore(state => state.completedTasks)


    if (completedTasks.length === 0) {
        return (
            <div className={styles.historyCard}>
                <span className={styles.empty}>Завершённых сессий пока нет</span>
            </div>
        )
    }

    return (
        <div className={styles.historyCard}>
            {completedTasks.map(record => (
                <div key={record.id} className={styles.row}>
                    <div className={styles.rowText}>
                        <span className={styles.title}>{record.taskTitle}</span>
                        <span className={styles.time}>{formatFinishedAt(record.finishedAt)}</span>
                    </div>
                    <span className={styles.duration}>{record.durationMinutes} мин</span>
                </div>
            ))}
        </div>
    );
};

export default StatsTasks;
