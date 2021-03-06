import igniteLogo from '../../assets/ignite-logo.svg';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt='Logo Ignite' />
      <h1>Ignite Feed</h1>
    </header>
  );
}
