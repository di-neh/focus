import type {FC, ReactNode} from "react";
import styles from './Tab.module.css'

interface TabProps {
    icon: ReactNode
    isActive: boolean
    onClick: () => void
}

const Tab:FC<TabProps> = (props) => {
    const {icon, isActive, onClick} = props

    return (
        <button
            type="button"
            className={`${styles.tab} ${isActive ? styles.active : ""}`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default Tab;