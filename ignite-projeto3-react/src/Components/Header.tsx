// css modules são uteis para evitar estizilizações de componentes afetando um ao outro.
// para resolver esse problema, ele gera uma hash para cada classe.

import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}