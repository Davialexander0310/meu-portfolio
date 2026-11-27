import AthenasImg from '../assets/images/Imagem Athenas.jpeg';
import F1Img from '../assets/images/Imagem F1.jpg';
import FolhaImg from '../assets/images/Imagem Folha.png';
import EstacionamentoImg from '../assets/images/Imagem Estacionamento.jpeg';

export const projects = [
  {
    id: 'athenas',
    title: 'Athenas',
    category: 'Liderança - FeCEAP',
    technologies: ['Gestão de Projetos', 'Liderança', 'Comunicação'],
    shortDescription: 'Progressive Web App (PWA) campeão na FeCEAP voltado à prevenção e identificação de fraudes em ecommerces. Atuei como líder do projeto, coordenando escopo, entregas e uma equipe de 4 pessoas.',
    github: '',
    image: AthenasImg
  },
  {
    id: 'sistema-folha-pagamento',
    title: 'Sistema de folha de pagamento',
    category: 'Java',
    technologies: ['Java', 'Swing', 'JDBC', 'MySQL'],
    shortDescription: 'Sistema de gestão de Funcionários e Folha de Pagamento em Java (Swing + JDBC/MySQL), com geração automática de lançamentos no módulo financeiro.',
    github: 'https://github.com/Davialexander0310/sistema-folha-pagamento',
    image: FolhaImg
  },
  {
    id: 'sistema-estacionamento',
    title: 'Sistema de estacionamento',
    category: 'Java',
    technologies: ['Java', 'Swing', 'JDBC', 'MySQL'],
    shortDescription: 'Sistema Desktop de Gerenciamento de Estacionamento desenvolvido em Java Swing e MySQL, com controle de entrada/saída de veículos, cálculo automático de tarifas, fluxo de caixa e níveis de acesso.',
    github: 'https://github.com/Davialexander0310/sistema-estacionamento',
    image: EstacionamentoImg
  },
  {
    id: 'projeto-f1',
    title: 'Resultados da Fórmula 1',
    category: 'Python',
    technologies: ['Python', 'FastF1'],
    shortDescription: 'Código em Python para ver resultados e qualificações dos Grandes Prêmios de Fórmula 1 utilizando a biblioteca FastF1.',
    github: 'https://github.com/Davialexander0310/projeto-f1',
    image: F1Img
  }
];