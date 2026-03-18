import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <>
            <Heading>
                Olá, mundo!
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit blablablablablablabalbalabalba</p>
        </>
    );
}