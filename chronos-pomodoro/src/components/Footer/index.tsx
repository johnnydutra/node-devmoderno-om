import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
    return(
        <footer className={styles.footer}>
            <Link to='/pomodoro'>Entenda como funciona a técnica pomodoro</Link>
            <a href='#'>Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️</a>
        </footer>
    );
}