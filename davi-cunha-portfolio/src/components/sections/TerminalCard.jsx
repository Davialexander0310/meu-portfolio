import { useState } from 'react';
import styles from './TerminalCard.module.css';

export function TerminalCard() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const jsonContent = `{
  "nome": "Davi Alexander Cunha Barbosa",
  "foco": "Desenvolvimento Back-end",
  "formacao": "Técnico em Informática - CEAP",
  "stacks": ["Java", "Python", "MySQL", "React"],
  "projetoDestaque": "Athenas - Campeão FeCEAP"
}`;

  function handleCopy() {
    navigator.clipboard.writeText(jsonContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={styles.terminal}>
      <div className={styles.topBar}>
        <div className={styles.dots}>
          <span className={styles.red}></span>
          <span className={styles.yellow}></span>
          <span className={styles.green}></span>
        </div>

        <div className={styles.tabs}>
          <button
            className={activeTab === 'profile' ? styles.activeTab : ''}
            onClick={() => setActiveTab('profile')}
          >
            perfil.json
          </button>
          <button
            className={activeTab === 'status' ? styles.activeTab : ''}
            onClick={() => setActiveTab('status')}
          >
            status.sh
          </button>
        </div>

        <button className={styles.copyBtn} onClick={handleCopy}>
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>

      <div className={styles.body}>
        {activeTab === 'profile' ? (
          <pre className={styles.code}>{jsonContent}</pre>
        ) : (
          <div className={styles.statusOutput}>
            <p><span className={styles.prompt}>$</span> whoami</p>
            <p className={styles.reply}>cunha.dev // Davi Alexander Cunha Barbosa</p>
            <p><span className={styles.prompt}>$</span> echo $STACK</p>
            <p className={styles.reply}>Java, Python, MySQL, React</p>
          </div>
        )}
      </div>
    </div>
  );
}