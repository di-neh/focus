import type {FC} from "react";
import styles from './StatsCards.module.css'

interface StatsCardsProps {
    value: number
    label: string
}

const StatsCards: FC<StatsCardsProps> = (props) => {
    const {value, label} = props

    return (
        <div className={styles.card}>
            <span className={styles.value}>{value}</span>
            <span className={styles.label}>{label}</span>
        </div>
    );
};

export default StatsCards;
