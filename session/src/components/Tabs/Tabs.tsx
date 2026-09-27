import Tab from "./Tab/Tab.tsx";
import CheckListIcon from "../../assets/icons/CheckListIcon.tsx";
import BrainIcon from "../../assets/icons/BrainIcon.tsx";
import StatIcon from "../../assets/icons/StatIcon.tsx";
import ServiceIcon from "../../assets/icons/ServiceIcon.tsx";
import styles from './Tabs.module.css'
import {type FC} from "react";
import type {TabId} from "../../types/TabId.ts";

interface ITabs{
    id: TabId,
    icon: () => React.JSX.Element
}

const TABS: ITabs[] = [
    {
        id: 'tasks',
        icon: CheckListIcon
    },
    {
        id: 'focus',
        icon: BrainIcon
    },
    {
        id: 'stats',
        icon: StatIcon
    },
    {
        id: 'settings',
        icon: ServiceIcon
    },
]

interface TabsProps {
    activeTab: TabId
    onTabChange: (tab: TabId) => void
}

const Tabs: FC<TabsProps> = (props) => {
    const { activeTab, onTabChange } = props

    return (
        <div className={styles.tabsWrapper}>
            {TABS.map((tab) => (
                    <Tab
                        key={tab.id}
                        icon={<tab.icon/>}
                        isActive={tab.id === activeTab}
                        onClick={() => onTabChange(tab.id)}
                    />
                ))
            }
        </div>
    );
};

export default Tabs;