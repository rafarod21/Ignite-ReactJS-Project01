import { PencilLine } from 'phosphor-react';

import styles from './styles.module.scss';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
        alt='Imagem de fundo do usuário'
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src='https://github.com/rafarod21.png'
          alt='Foto de perfil'
        />
        <strong>Rafael Rodrigues</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
