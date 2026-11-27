import { TerminalCard } from './TerminalCard';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.brand}>
          cunha<span>.</span>dev
        </span>
        <h1 className={styles.title}>
          cunha<span>.dev</span>
        </h1>
        <p className={styles.subtitle}>
          Estudante técnico em Informática no <strong>CEAP</strong>, com foco em
          desenvolvimento <strong>Back-end</strong>, bancos de dados relacionais
          e liderança de projetos.
        </p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.primaryBtn}>Ver Projetos</a>
          <a
            href="https://github.com/Davialexander0310"
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryBtn}
          >
            GitHub
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <TerminalCard />
      </div>
    </section>
  );
}