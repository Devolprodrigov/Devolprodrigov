/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { 
  Database, 
  Code, 
  BarChart3, 
  Cpu, 
  Linkedin, 
  Github, 
  Mail, 
  Terminal, 
  Layers, 
  Workflow,
  CheckCircle2,
  Zap,
  Briefcase,
  Sparkles,
  Bot,
  Box,
  Layout,
  ExternalLink
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import './index.css';

// --- DATA CONFIGURATION ---
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
  }
];

const EDUCATION = [
  { institution: "UniFatecie", degree: "Pós Graduação Engenharia de Segurança do Trabalho", period: "2026", status: "Concluído" },
  { institution: "UniFatecie", degree: "Análise e Desenvolvimento de Sistemas", period: "2025", status: "Concluído" },
  { institution: "UniFatecie", degree: "Bacharelado em Engenharia Ambiental e Sanitária", period: "2023 - 2026", status: "Em curso" },
  { institution: "Universidade Positivo", degree: "Bacharelado em Administração e Negócios", period: "2018 - 2021", status: "Concluído" }
];

const PROJECTS = [
  { title: "SST 4.0 Dashboard", desc: "Painel de controle preditivo que unifica dados de segurança, treinamentos e riscos em tempo real.", tech: ["Power BI", "DAX", "SQL"], color: "from-blue-600 to-indigo-500", isNew: true },
  { title: "SeaTalk Enterprise Bot", desc: "Sistema de automação que dispara relatórios executivos via SeaTalk baseado em triggers de performance.", tech: ["Apps Script", "Webhook API", "JSON"], color: "from-orange-500 to-rose-400" },
  { title: "Mobile HSE Auditor", desc: "Aplicativo personalizado para checklist de campo, eliminando papel e gerando reports imediatos.", tech: ["AppSheet", "BigQuery", "UX"], color: "from-emerald-500 to-teal-400" },
  { title: "ETL Predictive Pipeline", desc: "Pipeline de dados que identifica tendências e gargalos logísticos antes que impactem a operação.", tech: ["Python", "Pandas", "SQL"], color: "from-violet-600 to-fuchsia-500" }
];

const GITHUB_REPOS = [
  { name: "Beauty Sabrina", desc: "Plataforma de revenda focada em estética e beleza, com checkout via WhatsApp.", url: "https://beauty-sabrina.vercel.app/", tech: "React / Vercel", image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800" },
  { name: "Adriana Reciclagem", desc: "Solução industrial para gestão de resíduos com dashboard financeiro.", url: "https://adriana-reciclagem.vercel.app/", tech: "Tailwind CSS", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" },
  { name: "Rabia Perfumes", desc: "Catálogo premium de fragrâncias exclusivas com design de luxo.", url: "https://rabia-perfumes-k1nh.vercel.app/", tech: "Framer Motion", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800" },
  { name: "Data Automation Pro", desc: "Scripts avançados de integração e limpeza de dados industriais.", url: "https://github.com/Devolprodrigov", tech: "Python / SQL", image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800" }
];

// --- COMPONENTS ---
const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16">
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-2">
      <div className="w-12 h-[2px] bg-blue-500" />
      {subtitle && <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">{subtitle}</span>}
    </motion.div>
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black text-white">{children}</motion.h2>
  </div>
);

function App() {
  const [typedText, setTypedText] = useState('');
  const [techIndex, setTechIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const currentTech = TECH_STACK[techIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentTech.substring(0, typedText.length + 1));
        if (typedText === currentTech) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setTypedText(currentTech.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setTechIndex((prev) => (prev + 1) % TECH_STACK.length);
        }
      }
    }, isDeleting ? 30 : 70);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, techIndex]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[100] origin-left" style={{ scaleX }} />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center font-black text-white text-xs">R</div>
            <div className="text-sm font-black tracking-tighter text-white">RODRIGO<span className="text-blue-500">.</span>DEV</div>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            {['Início', 'Carreira', 'Habilidades', 'Projetos', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors cursor-pointer">{item}</a>
            ))}
          </div>
          <a href="https://www.linkedin.com/in/rodrigo-vieira-408b6295/" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest">Currículo</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="início" className="relative pt-40 pb-24 md:pt-64 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tight text-white mb-8">
            RODRIGO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">VIEIRA.</span>
          </h1>
          <div className="h-16 flex items-center text-3xl md:text-4xl font-light text-slate-500">
            <span className="font-mono text-blue-500 mr-4">_</span>
            <span>{typedText}</span>
            <span className="w-2 h-10 bg-blue-600 ml-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Experience, Skills and other sections go here (omitted for brevity but kept in original) */}
      <section id="carreira" className="py-20 px-6">
         <SectionTitle subtitle="Especializações">Perfil Técnico</SectionTitle>
         {/* ... Mapeamento de EXPERIENCES ... */}
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <div className="text-xl font-black text-white mb-4">RODRIGO<span className="text-blue-500">.</span>DEV</div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">© 2026 RODRIGO DA ROSA VIEIRA</p>
      </footer>
    </div>
  );
}

// --- RENDER CONFIGURATION ---
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  );
}
