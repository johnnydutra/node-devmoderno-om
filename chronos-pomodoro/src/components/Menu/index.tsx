import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { RouterLink } from '../RouterLink';

type ThemeOption = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<ThemeOption>(() => {
        const storedTheme = localStorage.getItem('current-theme') as ThemeOption || 'dark';
        return storedTheme;
    });

    const themeIconUpdateLookup = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    }

    function handleThemeSwitch(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

        event.preventDefault();

        setTheme(current => {
            const updated = current === 'dark' ? 'light' : 'dark';
            return updated;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('current-theme', theme);
    }, [theme]);    

    return (
        <nav className={styles.menu}>
            <RouterLink
                className={styles.menuLink} 
                href='/' 
                title='Início' 
                aria-label='Ir à tela inicial'
            >
                <HouseIcon />
            </RouterLink>

            <RouterLink
                className={styles.menuLink}
                href='/history'
                title='Histórico'
                aria-label='Ver histórico'
            >
                <HistoryIcon />
            </RouterLink>

            <RouterLink 
                className={styles.menuLink} 
                href='/settings'
                title='Configurações'
                aria-label='Acessar configurações'
            >
                <SettingsIcon />
            </RouterLink>

            <a
                className={styles.menuLink}
                href='#'
                title='Tema'
                aria-label='Alternar tema visual'
                onClick={handleThemeSwitch}
            >
                {themeIconUpdateLookup[theme]}
            </a>
        </nav>
    );
}