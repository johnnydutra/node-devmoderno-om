import type { HomePageProps } from '../../pages/HomePage';
import styles from './styles.module.css';

export function Countdown({ appState }: HomePageProps) {
    return (
        <div className={styles.container}>{appState.formattedSecondsRemaining}</div>
    );
}