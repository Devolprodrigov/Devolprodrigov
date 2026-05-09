/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Code, 
  BarChart3, 
  Cpu, 
  Linkedin, 
  Github, 
  Mail, 
  ChevronRight, 
  ExternalLink, 
  Terminal, 
  Layers, 
  Workflow,
  CheckCircle2,
  Phone,
  Send,
  Zap,
  TrendingUp,
  Layout,
  Briefcase,
  Sparkles,
  Bot,
  Box
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

const TECH_STACK = [
  "Analista de Dados", 
  "Especialista em BI", 
  "Python Expert", 
  "SQL Specialist", 
  "Engenheiro de Automação", 
  "Google Apps Script / AppsSheet"
];

const SKILLS = [
  { name: 'Power BI', level: 98, icon: <BarChart3 className="w-5 h-5" /> },
  { name: 'Python (Pandas)', level: 95, icon: <Code className="w-5 h-5" /> },
  { name: 'SQL Server', level: 92, icon: <Database className="w-5 h-5" /> },
  { name: 'Looker Studio', level: 90, icon: <Layout className="w-5 h-5" /> },
  { name: 'Google Apps Script', level: 92, icon: <Terminal className="w-5 h-5" /> },
  { name: 'AppSheet', level: 88, icon: <Cpu className="w-5 h-5" /> },
  { name: 'RPA / Automação', level: 94, icon: <Workflow className="w-5 h-5" /> },
  { name: 'AI Solutions', level: 85, icon: <Bot className="w-5 h-5" /> },
];

const EXPERIENCES = [
  {
    company: "RRV CONSULTORIA",
    role: "Proprietário / Administrador",
    period: "Dezembro 2025 - Presente",
    description: "Elevação do padrão de SST através da inteligência de dados e automação estratégica.",
    tags: ["Power BI", "RPA", "Predictive Analytics", "Consultoria Técnica"],
    achievements: [
      "Gestão de SST 4.0: Dashboards dinâmicos para visualização de KPIs em tempo real",
      "Automação de Conformidade: Sistemas para controle de prazos de ASOs e EPIs",
      "Análise Preditiva de Riscos para prevenção de acidentes industriais"
    ]
  },
  {
    company: "SHOPEE",
    role: "Senior Associate",
    period: "Julho 2022 - Outubro 2025",
    description: "Liderança de iniciativas de BI e automação para Operações e HSE.",
    tags: ["Google Apps Script", "SeaTalk API", "SQL", "Looker Studio"],
    achievements: [
      "Desenvolvimento de dashboards estratégicos com redução drástica de tempo de análise manual",
      "Criação de bot integrador SeaTalk para notificações automáticas de relatórios de turno",
      "Digitalização de processos de logística e HSE via AppSheet integrados a sistemas internos"
    ]
  },
  {
    company: "MARTIN BROWER",
    role: "Analista de HSE / Auditoria",
    period: "Agosto 2019 - Julho 2022",
    description: "Transformação de dados brutos em inteligência para tomada de decisão em logística.",
    tags: ["Power BI", "Excel Advanced", "SAP", "Gestão de KPIs"],
    achievements: [
      "Pioneirismo no uso de dashboards para centralização de performance de rotas e segurança",
      "Redução de 20% nas não conformidades de segurança via análise de indicadores preventivos",
      "Liderança na preparação para auditorias de Qualidade e SA8000 com 100% de conformidade"
    ]
  },
  {
    company: "POSIGRAF",
    role: "Technical Work Safety",
    period: "Outubro 2014 - Agosto 2019",
    description: "Gestão de segurança do trabalho e conformidade normativa em ambiente industrial.",
    tags: ["SGI", "ISO 9001/14001", "Auditoria Interna", "Gestão de Terceiros"],
    achievements: [
      "Realização de análise e planejamento do orçamento anual da área de segurança",
      "Coordenação da Brigada de Emergência e CIPA focada em redução de riscos críticos",
      "Implementação técnica rigorosa de treinamentos normativos (NRs) e auditorias de SGI"
    ]
  }
];

const EDUCATION = [
  {
    institution: "UniFatecie",
    degree: "Pós Graduação Engenharia de Segurança do Trabalho",
    period: "2026",
    status: "Concluído"
  },
  {
    institution: "UniFatecie",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "2025",
    status: "Concluído"
  },
  {
    institution: "UniFatecie",
    degree: "Bacharelado em Engenharia Ambiental e Sanitária",
    period: "2023 - 2026",
    status: "Em curso"
  },
  {
    institution: "Universidade Positivo",
    degree: "Bacharelado em Administração e Negócios",
    period: "2018 - 2021",
    status: "Concluído"
  }
];

const PROJECTS = [
  {
    title: "SST 4.0 Dashboard",
    desc: "Painel de controle preditivo que unifica dados de segurança, treinamentos e riscos em tempo real.",
    tech: ["Power BI", "DAX", "SQL"],
    color: "from-blue-600 to-indigo-500",
    isNew: true,
    githubUrl: "https://github.com/Devolprodrigov",
    liveUrl: "#"
  },
  {
    title: "SeaTalk Enterprise Bot",
    desc: "Sistema de automação que dispara relatórios executivos via SeaTalk baseado em triggers de performance.",
    tech: ["Apps Script", "Webhook API", "JSON"],
    color: "from-orange-500 to-rose-400",
    githubUrl: "https://github.com/Devolprodrigov",
    liveUrl: "#"
  },
  {
    title: "Mobile HSE Auditor",
    desc: "Aplicativo personalizado para checklist de campo, eliminando papel e gerando reports imediatos.",
    tech: ["AppSheet", "BigQuery", "UX"],
    color: "from-emerald-500 to-teal-400",
    githubUrl: "https://github.com/Devolprodrigov",
    liveUrl: "#"
  },
  {
    title: "ETL Predictive Pipeline",
    desc: "Pipeline de dados que identifica tendências e gargalos logísticos antes que impactem a operação.",
    tech: ["Python", "Pandas", "SQL"],
    color: "from-violet-600 to-fuchsia-500",
    githubUrl: "https://github.com/Devolprodrigov",
    liveUrl: "#"
  }
];

const GITHUB_REPOS = [
  {
    name: "Beauty Sabrina",
    desc: "Plataforma de revenda oficial focada em estética e beleza, com checkout otimizado para conversão via WhatsApp.",
    url: "https://beauty-sabrina.vercel.app/",
    tech: "React / Vercel",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Adriana Reciclagem",
    desc: "Solução industrial para gestão de resíduos, com dashboard completo de controle financeiro e IA Insights.",
    url: "https://adriana-reciclagem.vercel.app/",
    tech: "Tailwind CSS",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Rabia Perfumes",
    desc: "Catálogo premium de fragrâncias exclusivas (Árabes e Importados) com design de luxo e navegação fluida.",
    url: "https://rabia-perfumes-k1nh.vercel.app/",
    tech: "Framer Motion",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Data Automation Pro",
    desc: "Scripts avançados de integração e limpeza de dados industriais para automação de processos.",
    url: "https://github.com/Devolprodrigov",
    tech: "Python / SQL",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800"
  }
];


const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-2"
    >
      <div className="w-12 h-[2px] bg-blue-500" />
      {subtitle && (
        <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">
          {subtitle}
        </span>
      )}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-black text-white"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const [typedText, setTypedText] = useState('');
  const [techIndex, setTechIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const currentTech = TECH_STACK[techIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentTech.substring(0, typedText.length + 1));
        if (typedText === currentTech) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentTech.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setTechIndex((prev) => (prev + 1) % TECH_STACK.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, techIndex]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* ProgressBar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[100] origin-left" style={{ scaleX }} />

      {/* Decorative Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#
