import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Countdown } from './components/Countdown';

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <Countdown />
            </Container>

            <Container>
                <form action="" className="form">
                    <div className="formRow">
                        <label htmlFor='input'>Tarefa</label>
                        <input type="text" id="input" />
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="formRow">
                        <p>Ciclos</p>
                        <p>O O O O O O O</p>
                    </div>
                    <div className="formRow">
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>    
        </>
    );
}