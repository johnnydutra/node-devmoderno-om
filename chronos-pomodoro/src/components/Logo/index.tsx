import { GiTomato } from "react-icons/gi";
import styles from './styles.module.css';
import { RouterLink } from "../RouterLink";

export function Logo() {
    return (
        <div className={styles.logo}>
            <RouterLink className={styles.logoLink} href='/'>
                <GiTomato />
                <span>Tomatempo</span>
            </RouterLink>
        </div>
    );
}