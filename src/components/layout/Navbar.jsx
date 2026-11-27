import { useState } from 'react';
import styles from './Navbar.module.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo}>
          cunha<span>.</span>dev
        </a>

        <button
          className={styles.mobileBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? 'Fechar' : 'Menu'}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>01. Sobre</a>
          <a href="#tecnologias" onClick={() => setMenuOpen(false)}>02. Tecnologias</a>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>03. Projetos</a>
          <a href="#certificacoes" onClick={() => setMenuOpen(false)}>04. Certificações</a>
          <a href="#trajetoria" onClick={() => setMenuOpen(false)}>05. Trajetória</a>
        </nav>
      </div>
    </header>
  );
}