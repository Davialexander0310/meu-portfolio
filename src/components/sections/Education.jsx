import styles from './Education.module.css';

const TIMELINE = [
  {
    period: 'ATUAL',
    title: 'Ensino Médio Técnico em Informática',
    institution: 'CEAP',
    description: 'Formação técnica com foco em lógica de programação, desenvolvimento em Java e Python, bancos de dados relacionais (MySQL) e redes.'
  },
  {
    period: 'FECEAP',
    title: 'Campeão FeCEAP — Projeto Athenas',
    institution: 'CEAP',
    description: 'Liderança de equipe de 4 pessoas no desenvolvimento de um PWA voltado à prevenção e identificação de fraudes em e-commerces.'
  }
];

export function Education() {
  return (
    <section id="trajetoria" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.number}>05</span>
        <h2 className={styles.sectionTitle}>TRAJETÓRIA</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.timeline}>
        {TIMELINE.map((item) => (
          <div key={item.title} className={styles.item}>
            <span className={styles.dot}></span>
            <span className={styles.period}>{item.period}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <span className={styles.institution}>{item.institution}</span>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}