import styles from "../../Settings.module.css";
import type {FC, FocusEvent} from "react";
import {useSettingStore} from "../../store/SettingStore.ts";

type NumericSettingKey =
    | 'focusMinutes'
    | 'shortBreakMinutes'
    | 'longBreakMinutes'
    | 'sessionsBeforeLongBreak'


const DurationBar:FC = () => {

    const updateSettings = useSettingStore(state => state.updateSettings)
    const settings = useSettingStore(state => state.settings)

    function correctCheck(e: FocusEvent<HTMLInputElement>, field: NumericSettingKey) {
        const value = Number(e.target.value)
        if (Number.isInteger(value) && value > 0) {
            updateSettings({[field]: value})
        } else {
            e.target.value = String(settings[field])
        }
    }

    return (
        <>
            <div className={styles.durationRow}>
                <label className={styles.field}>
                    Фокус
                    <input
                        type="number"
                        className={styles.input}
                        defaultValue={settings.focusMinutes}
                        onBlur={(e) => correctCheck(e, 'focusMinutes')}
                    />
                </label>
                <label className={styles.field}>
                    Перерыв
                    <input
                        type="number"
                        className={styles.input}
                        defaultValue={settings.shortBreakMinutes}
                        onBlur={(e) => correctCheck(e, 'shortBreakMinutes')}
                    />
                </label>
                <label className={styles.field}>
                    Длинный
                    <input
                        type="number"
                        className={styles.input}
                        defaultValue={settings.longBreakMinutes}
                        onBlur={(e) => correctCheck(e, 'longBreakMinutes')}
                    />
                </label>
            </div>

            <label className={styles.card}>
                <span className={styles.cardLabel}>Сессий до длинного перерыва</span>
                <input
                    type="number"
                    className={styles.smallInput}
                    defaultValue={settings.sessionsBeforeLongBreak}
                    onBlur={(e) => correctCheck(e, 'sessionsBeforeLongBreak')}
                />
            </label>
        </>
    );
};

export default DurationBar;