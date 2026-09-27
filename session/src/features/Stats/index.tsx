import styles from './Stats.module.css'
import StatsCards from "./parts/StatsCards/StatsCards.tsx";
import StatsTasks from "./parts/StatsTasks/StatsTasks.tsx";
import type {FC} from "react";

const Stats:FC = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Статистика</h2>

            <div className={styles.cardsRow}>
                <StatsCards value="1" label="Сегодня"/>
                <StatsCards value="1" label="Всего сессий"/>
                <StatsCards value="2" label="Выполнено"/>
                <StatsCards value="2" label="Активных"/>
            </div>

            <h2 className={styles.heading}>История</h2>

            <StatsTasks/>
        </div>
    );
};

export default Stats;
