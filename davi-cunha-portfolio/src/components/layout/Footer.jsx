import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          2026 <span>Davi Alexander Cunha Barbosa</span>
        </p>

        <div className={styles.links}>
          <a href="https://github.com/Davialexander0310" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}