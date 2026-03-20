import { GiTomato } from "react-icons/gi";
import styles from './styles.module.css';

export function Logo() {
    return (
        <div className={styles.logo}>
            <a className={styles.logoLink} href='#'>
                <GiTomato />
                <span>Tomatempo</span>
            </a>
        </div>
    );
}