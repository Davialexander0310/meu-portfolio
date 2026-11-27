import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Technologies } from '../components/sections/Technologies';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Certificates } from '../components/sections/Certificates';
import { Education } from '../components/sections/Education';
import { projects } from '../data/projects';
import styles from './Home.module.css';

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Technologies />

      <section id="projetos" className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.number}>03</span>
          <h2 className={styles.sectionTitle}>PROJETOS EM DESTAQUE</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Certificates />
      <Education />
    </main>
  );
}

export default Home;