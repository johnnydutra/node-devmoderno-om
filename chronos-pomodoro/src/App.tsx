import './styles/theme.css';
import './styles/global.css';

import { HomePage } from './pages/HomePage';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessageContainer } from './components/MessageContainer';

export function App() {
    return (
        <TaskContextProvider>
            <MessageContainer>
                <HomePage />
            </MessageContainer>
        </TaskContextProvider>
    );
}