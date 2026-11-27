import styles from './About.module.css';

export function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.number}>01</span>
        <h2 className={styles.sectionTitle}>SOBRE MIM</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        <div className={styles.bio}>
          <p>
            Estudante técnico em Informática no <strong>CEAP</strong>, com foco em
            desenvolvimento back-end, bancos de dados relacionais e construção de
            sistemas em <strong>Java</strong> e <strong>Python</strong>.
          </p>
          <p>
            Atuei também como líder de equipe no desenvolvimento de soluções
            tecnológicas premiadas na feira tecnológica <strong>FeCEAP</strong>.
          </p>
        </div>

        <div className={styles.highlights}>
          <div className={styles.highlightCard}>
            <span className={styles.tag}>FOCO PRINCIPAL</span>
            <h3>Desenvolvimento Back-end</h3>
            <p>Regras de negócio, Orientação a Objetos e integração com MySQL.</p>
          </div>
          <div className={styles.highlightCard}>
            <span className={styles.tag}>DESTAQUE</span>
            <h3>Bicampeão FeCEAP</h3>
            <p>Vencedor duas vezes da feira tecnológica FeCEAP.</p>
          </div>
        </div>
      </div>
    </section>
  );
}