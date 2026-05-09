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
  Zap,
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
  }
];

const EDUCATION = [
  { institution: "UniFatecie", degree: "Pós Graduação Engenharia de Segurança do Trabalho", period: "2026", status: "Concluído" },
  { institution: "UniFatecie", degree: "Análise e Desenvolvimento de Sistemas", period: "2025", status: "Concluído" },
  { institution: "UniFatecie", degree: "Bacharelado em Engenharia Ambiental e Sanitária", period: "2023 - 2026", status: "Em curso" },
  { institution: "Universidade Positivo", degree: "Bacharelado em Administração e Negócios", period: "2018 - 2021", status: "Concluído" }
];

const PROJECTS = [
  {
    title: "SST 4.0 Dashboard",
    desc: "Painel de controle preditivo que unifica dados de segurança, treinamentos e riscos em tempo real.",
    tech: ["Power BI", "DAX", "SQL"],
    color: "from-blue-600 to-indigo-500",
    isNew: true
  },
  {
    title: "SeaTalk Enterprise Bot",
    desc: "Sistema de automação que dispara relatórios executivos via SeaTalk baseado em triggers de performance.",
    tech: ["Apps Script", "Webhook API", "JSON"],
    color: "from-orange-500 to-rose-400"
  },
  {
    title: "Mobile HSE Auditor",
    desc: "Aplicativo personalizado para checklist de campo, eliminando papel e gerando reports imediatos.",
    tech: ["AppSheet", "BigQuery", "UX"],
    color: "from-emerald-500 to-teal-400"
  }
];

const GITHUB_REPOS = [
  { name: "Beauty Sabrina", tech: "React / Vercel", url: "https://beauty-sabrina.vercel.app/", image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800" },
  { name: "Adriana Reciclagem", tech: "Tailwind CSS", url: "https://adriana-reciclagem.vercel.app/", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" },
  { name: "Rabia Perfumes", tech: "Framer Motion", url: "https://rabia-perfumes-k1nh.vercel.app/", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800" }
];

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16">
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-2">
      <div className="w-12 h-[2px] bg-blue-500" />
      {subtitle && <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">{subtitle}</span>}
    </motion.div>
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const [typedText, setTypedText] = useState('');
  const [techIndex, setTechIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Lógica de Digitação (Typewriter)
  useEffect(() => {
    const currentTech = TECH_STACK[techIndex];
    const typingSpeed = isDeleting ? 30 : 70;
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
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, techIndex]);

  // Função de Rolagem Suave
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[100] origin-left" style={{ scaleX }} />

      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center font-black text-white text-xs">R</div>
            <div className="text-sm font-black tracking-tighter text-white uppercase">RODRIGO<span className="text-blue-500">.</span>DEV</div>
          </div>
          
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            {['Início', 'Carreira', 'Habilidades', 'Projetos', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="hover:text-blue-400 transition-colors cursor-pointer relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <a href="https://www.linkedin.com/in/rodrigo-vieira-408b6295/" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30">
            Currículo
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="início" className="relative pt-40 pb-24 md:pt-64 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tight text-white mb-8">
            RODRIGO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">VIEIRA.</span>
          </h1>
          <div className="h-16 flex items-center text-3xl md:text-4xl font-light text-slate-500 mb-12">
            <span className="font-mono text-blue-500 mr-4">_</span>
            <span>{typedText}</span>
          </div>
        </div>
      </section>

      {/* Carreira */}
      <section id="carreira" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Especializações">Perfil Técnico</SectionTitle>
          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all">
                <span className="text-[10px] font-black text-blue-500 uppercase mb-2 block">{exp.period}</span>
                <h3 className="text-2xl font-black text-white mb-2">{exp.company}</h3>
                <p className="text-blue-400 text-sm font-bold mb-4 uppercase">{exp.role}</p>
                <p className="text-slate-400 mb-6">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Core Skills">Habilidades Industriais</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center group hover:border-blue-500/50 transition-all">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {skill.icon}
                </div>
                <h4 className="text-sm font-black text-white uppercase mb-1">{skill.name}</h4>
                <p className="text-[10px] font-bold text-blue-400 uppercase">{skill.level}% Expertise</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Execução">Projetos de Impacto</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <div key={i} className="p-8 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                <h3 className="text-xl font-black text-white mb-4 uppercase">{p.title}</h3>
                <p className="text-xs text-slate-500 mb-6">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tech.map(t => <span key={t} className="text-[8px] font-black uppercase px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center rounded-[40px] bg-gradient-to-b from-white/[0.05] to-transparent p-20 border border-white/5">
          <h3 className="text-5xl font-black text-white mb-8 uppercase tracking-tighter">Bora Vencer?</h3>
          <p className="text-slate-400 mb-12 font-mono text-sm">Disponível para consultoria em BI, Automação e Engenharia de Dados.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="mailto:rodrigovieiradev@outlook.com" className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all">E-mail</a>
            <a href="https://wa.me/5541999279828" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-green-500 transition-all">WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 px-6 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
        © 2026 RODRIGO.DEV | Built with React 19 + Vite
      </footer>
    </div>
  );
}