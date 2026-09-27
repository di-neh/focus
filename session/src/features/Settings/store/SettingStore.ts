import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type {Settings} from "../../../types/Settings.ts";

interface ISettingStore {
    settings: Settings

    updateSettings: (patch: Partial<Settings>) => void
}

export const useSettingStore = create<ISettingStore>()(
    persist(
        set => ({
            settings: {
                focusMinutes: 25,
                shortBreakMinutes: 5,
                longBreakMinutes: 15,
                sessionsBeforeLongBreak: 4,
                autoStartBreak: false,
                autoStartFocus: false,
            },

            updateSettings: (patch ) => set(state => ({
                settings: { ...state.settings, ...patch }
            }))
        }),
        {name: 'focus-session:settings'}
    )
)