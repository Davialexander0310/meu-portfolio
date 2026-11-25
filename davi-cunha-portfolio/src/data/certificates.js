import certOracleOca from '../assets/images/certificados/Certificação Oficial - Oracle Certified Associate (OCA) Java SE.jpeg';
import certCiscoRedes from '../assets/images/certificados/Certificado Cisco Networking Academy - Fundamentos da rede.jpeg';
import certCiscoCyber from '../assets/images/certificados/Certificado Cisco Networking Academy - Introdução à Cibersegurança.jpeg';
import certOracleFoundations from '../assets/images/certificados/Certificado Oracle Academy - Java Foundations.jpeg';
import certOracleProg from '../assets/images/certificados/Certificado Oracle Academy - Java Programming.jpeg';
import certObi from '../assets/images/certificados/OBI - Modalidade Programação Nível 2.jpeg';

export const certificates = [
  {
    id: 'oracle-oca',
    title: 'Oracle Certified Associate (OCA) Java SE',
    issuer: 'Oracle',
    image: certOracleOca,
    shortDesc: 'Certificação oficial internacional que comprova domínio em Java SE, Orientação a Objetos, APIs principais e tratamento de exceções.'
  },
  {
    id: 'oracle-java-programming',
    title: 'Java Programming',
    issuer: 'Oracle Academy',
    image: certOracleProg,
    shortDesc: 'Desenvolvimento avançado em Java, estruturas de dados, manipulação de arquivos e boas práticas de arquitetura.'
  },
  {
    id: 'oracle-java-foundations',
    title: 'Java Foundations',
    issuer: 'Oracle Academy',
    image: certOracleFoundations,
    shortDesc: 'Fundamentos sólidos da linguagem Java, lógica de programação e conceitos base de Orientação a Objetos.'
  },
  {
    id: 'cisco-ciberseguranca',
    title: 'Introdução à Cibersegurança',
    issuer: 'Cisco Networking Academy',
    image: certCiscoCyber,
    shortDesc: 'Princípios de segurança da informação, proteção de dados, ameaças digitais e defesa de redes.'
  },
  {
    id: 'cisco-redes',
    title: 'Fundamentos da Rede',
    issuer: 'Cisco Networking Academy',
    image: certCiscoRedes,
    shortDesc: 'Arquitetura de redes, protocolos TCP/IP, endereçamento IP e configuração básica de conectividade.'
  },
  {
    id: 'obi-nivel-2',
    title: 'Modalidade Programação — Nível 2',
    issuer: 'OBI (Olimpíada Brasileira de Informática)',
    image: certObi,
    shortDesc: 'Participação na Olimpíada Brasileira de Informática com foco em algoritmos, lógica e resolução de problemas.'
  }
];