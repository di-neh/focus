import {type FC} from "react";
import styles from './Timer.module.css'
import type {FocusSessionApi} from "../../../hooks/useFocusSession.ts";

interface TimerProps{
    session: FocusSessionApi
}

function formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const Timer: FC<TimerProps> = (props) => {
    const {session} = props

    return (
        <div className={styles.TimerWrapper}>
            <div className={styles.TimerText}>
                {formatTime(session.remaining)}
            </div>
            <div className={styles.BtnsContainer}>
                <button
                    type="button"
                    disabled={!session.isRunning && !session.canStart}
                    className={styles.StartBtn}
                    onClick={session.isRunning ? session.pause : session.start}
                >{session.isRunning ? 'Пауза' : 'Старт'}</button>

                <button
                    type="button"
                    className={styles.CancelBtn}
                    onClick={session.skip}
                    disabled={!session.isRunning && !session.canStart}
                >Пропустить</button>

                <button
                    type="button"
                    className={styles.CancelBtn}
                    disabled={!session.isRunning && !session.canStart}
                    onClick={session.reset}
                >Сброс</button>
            </div>
        </div>
    );
};

export default Timer;