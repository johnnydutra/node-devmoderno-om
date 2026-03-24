import './styles/theme.css';
import './styles/global.css';

import { HomePage } from './pages/HomePage';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessageContainer } from './components/MessageContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NotFound } from './pages/NotFound';
import { AboutPomodoro } from './pages/AboutPomodoro';

export function App() {
    return (
        <TaskContextProvider>
            <MessageContainer>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage />}/>
                        <Route path='/pomodoro' element={<AboutPomodoro />}/>
                        <Route path='*' element={<NotFound />}/>
                    </Routes>
                </BrowserRouter>
            </MessageContainer>
        </TaskContextProvider>
    );
}