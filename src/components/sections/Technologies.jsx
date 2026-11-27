import { FaJava, FaCss3Alt } from 'react-icons/fa';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiMysql,
  SiGit,
  SiGithub
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import styles from './Technologies.module.css';

const TOOLS = [
  { name: 'Java', color: '#f89820', Icon: FaJava },
  { name: 'Python', color: '#3776ab', Icon: SiPython },
  { name: 'JavaScript', color: '#f7df1e', Icon: SiJavascript },
  { name: 'React', color: '#61dafb', Icon: SiReact },
  { name: 'Node.js', color: '#339933', Icon: SiNodedotjs },
  { name: 'HTML5', color: '#e34f26', Icon: SiHtml5 },
  { name: 'CSS3', color: '#1572b6', Icon: FaCss3Alt },
  { name: 'MySQL', color: '#4479a1', Icon: SiMysql },
  { name: 'Git', color: '#f05032', Icon: SiGit },
  { name: 'GitHub', color: '#ffffff', Icon: SiGithub },
  { name: 'VS Code', color: '#007acc', Icon: VscVscode }
];

export function Technologies() {
  return (
    <section id="tecnologias" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.number}>02</span>
        <h2 className={styles.sectionTitle}>TECNOLOGIAS & FERRAMENTAS</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {TOOLS.map(({ name, color, Icon }) => (
          <div
            key={name}
            className={styles.toolItem}
            style={{ '--tool-color': color }}
          >
            <div className={styles.iconBox}>
              <Icon size={44} />
            </div>
            <span className={styles.toolName}>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}