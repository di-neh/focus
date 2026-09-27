import styles from './Stats.module.css'
import StatsCards from "./parts/StatsCards/StatsCards.tsx";
import StatsTasks from "./parts/StatsTasks/StatsTasks.tsx";
import type {FC} from "react";
import {useCompletedTasksStore} from "./store/CompletedTasksStore.ts";
import {useTaskStore} from "../Tasks/store/TaskStore.ts";
import {colTodayCounter} from "./utils/StatsFunctions.ts";

const Stats:FC = () => {

    const completedTasks = useCompletedTasksStore(state => state.completedTasks)
    const tasks = useTaskStore(state => state.tasks)

    const colSessions = completedTasks.length
    const colCompleted = tasks.filter(task => task.isComplete).length
    const colToday = colTodayCounter(completedTasks)

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Статистика</h2>

            <div className={styles.cardsRow}>
                <StatsCards value={colToday} label="Сегодня"/>
                <StatsCards value={colSessions} label="Всего сессий"/>
                <StatsCards value={colCompleted} label="Выполнено"/>
            </div>

            <h2 className={styles.heading}>История</h2>

            <StatsTasks/>
        </div>
    );
};

export default Stats;
