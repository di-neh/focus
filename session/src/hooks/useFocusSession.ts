import type {Phase} from "../types/Phase.ts";
import type {Task} from "../types/Task.ts";
import {useEffect, useState} from "react";
import type {Settings} from "../types/Settings.ts";


export function useFocusSession(
    addHistory: (task: Task, durationMinutes: number) => void,
    settings: Settings,
    task?: Task
) {

    function phaseMinutes(target: Phase): number {
        switch (target) {
            case "focus":
                return  settings.focusMinutes
            case "longBreak":
                return  settings.longBreakMinutes
            case "shortBreak":
                return settings.shortBreakMinutes
        }
    }

    const [phase, setPhase] = useState<Phase>('focus')
    const [remaining, setRemaining] = useState(phaseMinutes('focus') * 60)
    const [endTime, setEndTime] = useState<number | null>(null)
    const [completedInCycle, setCompletedInCycle] = useState(0)

    const isRunning = endTime !== null

    function startFrom(seconds: number) {
        if (!task) return

        setEndTime(Date.now() + seconds * 1000)
    }

    function start() {
        if (!task) return

        setEndTime(Date.now() + remaining * 1000)
    }

    function pause() {
        setEndTime(null)
    }

    function reset() {
        setEndTime(null)
        setRemaining(phaseMinutes(phase) * 60)
    }

    function finishPhase(counted: boolean) {
        setEndTime(null)

        if (phase !== 'focus') {
            const focusSeconds = phaseMinutes('focus') * 60

            setPhase('focus')
            setRemaining(focusSeconds)

            if (settings.autoStartFocus) startFrom(focusSeconds)
            return
        }

        if (counted && task) {
            addHistory(task, phaseMinutes('focus'))
        }

        const completed = counted ? completedInCycle + 1 : completedInCycle
        const isLongBreak = completed >= settings.sessionsBeforeLongBreak
        const nextPhase: Phase = isLongBreak ? 'longBreak' : 'shortBreak'
        const nextSeconds = phaseMinutes(nextPhase) * 60


        setCompletedInCycle(isLongBreak ? 0 : completed)
        setPhase(nextPhase)
        setRemaining(nextSeconds)

        if (settings.autoStartBreak) startFrom(nextSeconds)
    }


    useEffect(() => {
        if (endTime === null) return

        const intervalId = setInterval(() => {
            const left = Math.max(0, Math.ceil((endTime - Date.now()) / 1000))

            setRemaining(left)

            if (left === 0) {
                clearInterval(intervalId)
                finishPhase(true)
            }
        }, 250)

        return () => clearInterval(intervalId)
    }, [endTime])

    const canStart = task !== undefined

    return {
        phase, remaining, isRunning, completedInCycle,
        start, pause, reset,
        skip: () => finishPhase(false),
        canStart
    }
}

export type FocusSessionApi = ReturnType<typeof useFocusSession>
