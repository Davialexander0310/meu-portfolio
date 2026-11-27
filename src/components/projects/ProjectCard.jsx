import styles from './ProjectCard.module.css';

export function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={"Preview do projeto ${project.title}"}
          className={styles.projectImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.topBar}>
          <span className={styles.category}>{project.category}</span>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>

        <div className={styles.tags}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={styles.detailsLink}
          >
            Ver no GitHub
          </a>
        )}
      </div>
    </article>
  );
}