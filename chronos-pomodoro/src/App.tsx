import './styles/theme.css';
import './styles/global.css';

import { HomePage } from './pages/HomePage';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';

const initialAppState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreak: 5,
        longBreak: 15
    }
};

export function App() {
    const [appState, setAppState] = useState(initialAppState);

    return (
        <HomePage appState={appState} setAppState={setAppState}/>
    );
}