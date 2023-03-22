import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

//componentes react devem começar com letra Maiusc.
export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    );
}