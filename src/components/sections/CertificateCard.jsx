import styles from '../sections/Certificates.module.css';

export function CertificateCard({ certificate }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={certificate.image}
          alt={`Certificado ${certificate.title}`}
          className={styles.certImage}
        />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.issuer}>{certificate.issuer}</span>
        <h3 className={styles.title}>{certificate.title}</h3>
        <p className={styles.desc}>{certificate.shortDesc}</p>
      </div>
    </article>
  );
}