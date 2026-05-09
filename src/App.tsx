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
  { name: 'RPA / Workflow', level: 94, icon: <Workflow className="w-5 h-5" /> },
  { name: 'AI Solutions', level: 85, icon: <Sparkles className="w-5 h-5" /> },
];

const PROJECTS = [
  {
    title: "Beauty Sabrina",
    type: "E-commerce & Catalog",
    tech: ["React", "WhatsApp API", "Cloud"],
    desc: "Plataforma de vendas otimizada para alta conversão mobile.",
    link: "https://devolprodrigov.github.io/beauty-sabrina/"
  },
  {
    title: "Adriana Reciclagem",
    type: "ERP Industrial",
    tech: ["Vite", "Firebase", "Dashboards"],
    desc: "Sistema completo de gestão de resíduos com análise preditiva.",
    link: "https://devolprodrigov.github.io/adriana-reciclagem/"
  },
  {
    title: "Rabia Perfumes",
    type: "Luxury Catalog",
    tech: ["UI/UX", "Animation", "Responsive"],
    desc: "Experiência premium para catálogo de fragrâncias de luxo.",
    link: "https://devolprodrigov.github.io/rabia-perfumes/"
  },
  {
    title: "Data Automation Pro",
    type: "Backend / ETL",
    tech: ["Python", "SQL Server", "Google API"],
    desc: "Scripts de automação que reduziram o processamento manual em 80%.",
    link: "#"
  }
];

const EXPERIENCE = [
  {
    company: "RRV CONSULTORIA",
    role: "Especialista em Dados & Automação",
    period: "2025 - Presente",
    achievements: ["Implementação de SST 4.0", "Criação de Dashboards executivos", "Automação de workflows industriais"]
  },
  {
    company: "SHOPEE",
    role: "Liderança de BI & Processos",
    period: "2022 - 2025",
    achievements: ["Desenvolvimento de bots via SeaTalk API", "Gestão de KPIs logísticos", "Digitalização de check-lists"]
  },
  {
    company: "MARTIN BROWER",
    role: "Analista SGI / Logística",
    period: "2019 - 2022",
    achievements: ["Redução de 20% em não conformidades", "Dashboards Power BI para Supply Chain"]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans text-slate-300 selection:bg-blue-500/30">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50" style={{ scaleX }} />
      
      {/* NAVIGATION CORRIGIDA */}
      <header className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Box className="w-6 h-6 text-blue-500" />
            <div className="text-xl font-black text-white tracking-tighter">
              RODRIGO<span className="text-blue-500">.</span>DEV
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#carreira" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-500 transition-colors">Carreira</a>
            <a href="#habilidades" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-500 transition-colors">Habilidades</a>
            <a href="#projetos" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-500 transition-colors">Projetos</a>
            <a href="#contato" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all shadow-lg shadow-blue-900/20">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Disponível para Projetos Estratégicos
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 tracking-tighter">
                SST 4.0 & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">DADOS.</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-medium">
                Transformo ambientes industriais complexos em operações inteligentes através de Python, Power BI e Automação de Processos.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => window.location.href="#contato"} className="px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-none hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2">
                  Iniciar Projeto <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HABILIDADES (ID ADICIONADO) */}
        <section id="habilidades" className="py-24 px-6 bg-white/5 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Stack Técnica</h2>
              <h3 className="text-4xl font-black text-white tracking-tighter">MATRIZ DE COMPETÊNCIAS</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SKILLS.map((skill, i) => (
                <div key={i} className="p-6 bg-[#0f172a] border border-white/5 hover:border-blue-500/50 transition-all group">
                  <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-white font-black text-xs uppercase tracking-widest">{skill.name}</span>
                    <span className="text-blue-500 font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/10 w-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARREIRA (ID ADICIONADO) */}
        <section id="carreira" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
            <div>
              <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Experiência</h2>
              <h3 className="text-4xl font-black text-white tracking-tighter mb-8">TRAJETÓRIA PROFISSIONAL</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Mais de uma década unindo Segurança Industrial, Administração e Tecnologia para otimizar resultados.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="relative pl-8 border-l border-white/10">
                  <div className="absolute top-0 left-[-5px] w-[9px] h-[9px] bg-blue-500 rounded-full" />
                  <div className="text-blue-400 font-mono text-[10px] mb-2">{exp.period}</div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter">{exp.company}</h4>
                  <div className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">{exp.role}</div>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-blue-900" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS (ID ADICIONADO) */}
        <section id="projetos" className="py-24 px-6 bg-[#0a101f]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Portfólio</h2>
                <h3 className="text-4xl font-black text-white tracking-tighter uppercase">EXECUÇÃO DE PROJETOS</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS.map((project, i) => (
                <div key={i} className="group relative bg-[#0f172a] border border-white/5 p-8 overflow-hidden hover:border-blue-500/30 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500"><Layout className="w-6 h-6" /></div>
                    <div className="flex gap-2">
                      {project.tech.map((t, j) => (
                        <span key={j} className="text-[8px] font-black uppercase tracking-tighter px-2 py-1 bg-white/5 text-slate-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-6 font-medium">{project.desc}</p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-black text-blue-500 uppercase tracking-widest hover:text-white transition-colors">
                    Ver Repositório <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO (ID ADICIONADO) */}
        <section id="contato" className="py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-4 bg-blue-600/10 rounded-full text-blue-500 mb-8">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-5xl font-black text-white mb-8 tracking-tighter uppercase">VAMOS ESCALAR SUA OPERAÇÃO?</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="https://wa.me/5541992764125" className="px-8 py-4 bg-blue-600 text-white font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
                <Phone className="w-4 h-4" /> WhatsApp
              </a>
              <a href="mailto:rodrigo.darosa@outlook.com" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                <Mail className="w-4 h-4" /> E-mail Profissional
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#01040f]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Box className="w-6 h-6 text-blue-500" />
              <div className="text-xl font-black text-white uppercase">RODRIGO<span className="text-blue-500">.</span>DEV</div>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 max-w-xs">
              SISTEMA OTIMIZADO PARA ALTA PERFORMANCE E DECISÕES BASEADAS EM DADOS.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div>
              <h5 className="text-[10px] font-black text-white uppercase tracking-widest mb-4">Mídias</h5>
              <div className="flex gap-4">
                <a href="https://github.com/Devolprodrigov" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/rodrigo-vieira-408b6295/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-[10px] font-black text-white uppercase tracking-widest mb-4 text-center">Créditos</h5>
              <div className="text-[10px] font-mono text-slate-600">
                &copy; 2026 RRV SOLUÇÕES DIGITAIS
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
