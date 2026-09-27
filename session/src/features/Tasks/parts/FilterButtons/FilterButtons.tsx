import {type FC} from 'react';
import styles from './FilterButtons.module.css'
import type {FilterBtn} from "../../../../types/FilterBtn.ts";

interface FilterButtonsProps{
    filter: FilterBtn,
    setFilter: (filter: FilterBtn) => void
}

interface IButtons{
    id: number,
    value: FilterBtn,
    title: string
}

const BUTTONS: IButtons[] = [
    {
        id: 1,
        value: 'all',
        title: 'Все'
    },
    {
        id: 2,
        value: 'active',
        title: 'Активные'
    },
    {
        id: 3,
        value: 'completed',
        title: 'Выполнены'
    }
]

const FilterButtons: FC<FilterButtonsProps> = (props) => {
    const {filter, setFilter} = props


    return (
        <div>
            <div className={styles.btnContainer}>
                {BUTTONS.map(btn => (
                    <button
                        key={btn.id}
                        className={`${styles.filterBtn} ${btn.value === filter ? styles.activeBtn : ''}`}
                        onClick={() => setFilter(btn.value)}
                    >
                        {btn.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterButtons;