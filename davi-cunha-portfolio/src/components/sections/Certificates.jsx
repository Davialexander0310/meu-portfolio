import { certificates } from '../../data/certificates';
import { CertificateCard } from './CertificateCard';
import styles from './Certificates.module.css';

export function Certificates() {
  return (
    <section id="certificacoes" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.number}>04</span>
        <h2 className={styles.sectionTitle}>CERTIFICAÇÕES</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </section>
  );
}