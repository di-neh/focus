import styles from './Settings.module.css'
import DurationBar from "./parts/Duration/DurationBar.tsx";
import type {FC} from "react";
import {useSettingStore} from "./store/SettingStore.ts";

const Index:FC = () => {

    const settings = useSettingStore(state => state.settings)
    const updateSettings = useSettingStore(state => state.updateSettings)

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Настройки</h2>
            <h3 className={styles.subheading}>Длительность (минуты)</h3>
            <DurationBar/>
            <h3 className={styles.subheading}>Автоматизация</h3>

            <label className={styles.card}>
                <span className={styles.cardLabel}>Автостарт перерыва</span>
                <input
                    type="checkbox"
                    className={styles.switch}
                    checked={settings.autoStartBreak}
                    onChange={event => updateSettings({autoStartBreak: event.target.checked})}
                />
            </label>

            <label className={styles.card}>
                <span className={styles.cardLabel}>Автостарт фокус-сессии</span>
                <input
                    type="checkbox"
                    className={styles.switch}
                    checked={settings.autoStartFocus}
                    onChange={event => updateSettings({autoStartFocus: event.target.checked})}
                />
            </label>
        </div>
    );
};

export default Index;
