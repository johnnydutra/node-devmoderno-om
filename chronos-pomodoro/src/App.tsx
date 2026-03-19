import './styles/theme.css';
import './styles/global.css';

import { HomePage } from './pages/HomePage';
import { TaskContextProvider } from './contexts/TaskContext';

export function App() {
    return (
        <TaskContextProvider>
            <HomePage />
        </TaskContextProvider>
    );
}