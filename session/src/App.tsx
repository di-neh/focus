import './App.css'
import Tabs from "./components/Tabs/Tabs.tsx";
import Tasks from "./features/Tasks/Index.tsx";
import {type ReactNode, useState} from "react";
import type {TabId} from "./types/TabId.ts";
import FocusSession from "./features/FocusSession";
import Stats from "./features/Stats";
import Settings from "./features/Settings";
import {useFocusSession} from "./hooks/useFocusSession.ts";
import {useTaskStore} from "./features/Tasks/store/TaskStore.ts";
import {useSettingStore} from "./features/Settings/store/SettingStore.ts";
import {useCompletedTasksStore} from "./features/Stats/store/CompletedTasksStore.ts";


function App() {
    const [activeTab, setActiveTab] = useState<TabId>('tasks')

    const settings = useSettingStore(state => state.settings)

    const addCompletedTask = useCompletedTasksStore(state => state.addCompletedTask)

    const tasks = useTaskStore(state => state.tasks)
    const selectedTaskId = useTaskStore(state => state.selectedTaskId)
    const selectTask = useTaskStore(state => state.selectTask)

    const focusTask = tasks.find(task => task.id === selectedTaskId)

    const session = useFocusSession(addCompletedTask, settings, focusTask)

    const SECTIONS: Record<TabId, ReactNode> = {
        tasks: <Tasks setFocusTask={selectTask}/>,
        focus: <FocusSession
            task={focusTask}
            session={session}
        />,
        stats: <Stats/>,
        settings: <Settings/>,
    }

  return (
    <div style={{display: "flex", gap: '32px', flexDirection:'column', alignItems:'center'}}>
        <span>Фокус-сессии</span>
        <Tabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
        />
        {SECTIONS[activeTab]}
    </div>
  )
}

export default App
