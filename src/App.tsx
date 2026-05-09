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
  "Looker Studio e BI", 
  "Python Expert", 
  "SQL Specialist", 
  "Automação de Processos", 
  "Google Apps Script / AppsSheet"
];

const SKILLS = [
  { name: 'Power BI', level: 80, icon: <BarChart3 className="w-5 h-5" /> },
  { name: 'Python (Pandas)', level: 95, icon: <Code className="w-5 h-5" /> },
  { name: 'SQL Server', level: 80, icon: <Database className="w-5 h-5" /> },
  { name: 'Looker Studio', level: 95, icon: <Layout className="w-5 h-5" /> },
  { name: 'Google Apps Script', level: 92, icon: <Terminal className="w-5 h-5" /> },
  { name: 'AppSheet', level: 88, icon: <Cpu className="w-5 h-5" /> },
  { name: 'RPA / Automação', level: 94, icon: <Workflow className="w-5 h-5" /> },
  { name: 'AI Solutions', level: 90, icon: <Bot className="w-5 h-5" /> },
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
    image: "./imagens/sabrina.png"
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

  // FUNÇÃO DE SCROLL SUAVE PARA OS MENUS
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Compensação da altura do header fixo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617] to-[#020617]" />
      </div>

      {/* Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center font-black text-white text-xs">R</div>
            <div className="text-sm font-black tracking-tighter text-white">
              RODRIGO<span className="text-blue-500">.</span>DEV
            </div>
          </motion.div>
          
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

          <motion.a 
            href="https://www.linkedin.com/in/rodrigo-vieira-408b6295/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 flex items-center gap-2"
          >
            Acessar Currículo
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="início" className="relative pt-40 pb-24 md:pt-64 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.a 
              href="https://wa.me/5541999279828"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 hover:bg-blue-500 hover:text-white transition-all group cursor-pointer"
            >
              <Zap className="w-3 h-3 animate-pulse group-hover:scale-120 transition-transform" /> 
              Disponível para Projetos 💬
            </motion.a>
            
            <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tight text-white mb-8">
              RODRIGO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500">
                VIEIRA<span className="text-white">.</span>
              </span>
            </h1>

            <div className="h-16 flex items-center text-3xl md:text-4xl font-light text-slate-500 mb-12">
              <span className="font-mono text-blue-500 mr-4 group-hover:rotate-90 transition-transform">_</span>
              <span>{typedText}</span>
              <span className="w-2 h-10 bg-blue-600 ml-2 animate-pulse" />
            </div>

              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/rodrigo-vieira-408b6295/" target="_blank" rel="noreferrer" className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all">
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-white" />
                </a>
                <a href="https://github.com/Devolprodrigov" target="_blank" rel="noreferrer" className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all">
                  <Github className="w-5 h-5 text-slate-400 hover:text-white" />
                </a>
                <a href="mailto:rodrigovieiradev@outlook.com" className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all">
                  <Mail className="w-5 h-5 text-slate-400 hover:text-white" />
                </a>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: 'Anos de Dados', val: '04+', icon: <Layers className="w-4 h-4" /> },
            { label: 'Processos Automatizados', val: '50+', icon: <Workflow className="w-4 h-4" /> },
            { label: 'Empresas Multinacionais', val: '03', icon: <Briefcase className="w-4 h-4" /> },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="group"
            >
              <div className="flex items-center gap-3 text-slate-500 mb-2">
                <span className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-600 transition-colors">
                  {React.cloneElement(stat.icon as React.ReactElement, { className: "w-4 h-4 group-hover:text-white" })}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
              </div>
              <div className="text-5xl font-black text-white">{stat.val}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Summary */}
      <section id="carreira" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Especializações">Perfil Técnico</SectionTitle>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-12">
              <div className="space-y-12">
                {EXPERIENCES.map((exp, i) => (
                  <motion.div 
                    key={i}
                    className="group grid md:grid-cols-12 gap-8 p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all"
                  >
                    <div className="md:col-span-3">
                      <span className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] block mb-2">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="md:col-span-6">
                      <p className="text-lg font-bold text-white mb-4 uppercase tracking-tighter">
                        {exp.role}
                      </p>
                      <p className="text-slate-400 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      <ul className="space-y-3">
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="flex gap-3 text-sm items-start">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="text-slate-300">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 text-[9px] font-black uppercase text-slate-400 border border-white/5 tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="habilidades" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Competências Core">Habilidades Industriais</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-center text-center group hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {skill.icon}
                </div>
                <h4 className="text-sm font-black text-white uppercase tracking-widest mb-1">{skill.name}</h4>
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">{skill.level}% Expertise</p>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${skill.level}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formação" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Base Acadêmica">Formação</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col group"
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-blue-500 mb-2">{edu.period}</span>
                <h4 className="text-xl font-black text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">{edu.institution}</h4>
                <p className="text-xs text-slate-400 mb-6 flex-grow">{edu.degree}</p>
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${edu.status === 'Concluído' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">{edu.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projetos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Execução">Projetos de Impacto</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={i}
                className="group relative h-[250px] rounded-[32px] overflow-hidden border border-white/5"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                <div className="relative h-full p-6 flex flex-col justify-end bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.tech.map(t => (
                      <span key={t} className="text-[7px] font-black uppercase tracking-widest bg-white/10 text-white px-2 py-0.5 rounded-md backdrop-blur-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 group-hover:translate-x-1 transition-transform duration-500">
                    {p.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 mb-2 line-clamp-2">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Repos Grid */}
          <div className="mt-24 p-12 rounded-[40px] bg-white/[0.01] border border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <SectionTitle subtitle="Open Source">Repositórios GitHub</SectionTitle>
                <div className="text-slate-500 text-sm max-w-md -mt-8 font-mono">
                  {'//'} Explore outros projetos técnicos e scripts de automação.
                </div>
              </div>
              <motion.a 
                href="https://github.com/Devolprodrigov"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all text-xs font-black uppercase tracking-widest text-white mb-4"
              >
                Ver Perfil Completo <ExternalLink className="w-4 h-4 text-blue-500" />
              </motion.a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {GITHUB_REPOS.map((repo, i) => (
                <motion.a
                  key={i}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all group"
                >
                  <div className="h-40 overflow-hidden relative border-b border-white/5">
                    <img src={repo.image} alt={repo.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="p-6">
                      <h4 className="text-sm font-black text-white group-hover:text-blue-400 transition-colors">{repo.name}</h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed mb-4">{repo.desc}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Contact Section */}
      <section id="contato" className="py-32 px-6">
        <div className="max-w-4xl mx-auto rounded-[40px] bg-white/[0.02] border border-white/5 overflow-hidden">
          <div className="flex items-center gap-2 px-6 py-4 bg-white/5 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
            <span className="ml-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">msg_channel_01.exe</span>
          </div>
          <div className="p-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-4xl font-black text-white mb-6">BORAVENCER<span className="text-blue-500">?</span></h3>
                <div className="space-y-4">
                  {[
                    { label: 'E-mail', val: 'rodrigovieiradev@outlook.com', href: 'mailto:rodrigovieiradev@outlook.com' },
                    { label: 'WhatsApp', val: '+55 41 99927-9828', href: 'https://wa.me/5541999279828' }
                  ].map((c, i) => (
                    <a key={i} href={c.href} target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-xs font-mono">
                      <span className="text-blue-500">{'>'}</span>
                      <span className="text-slate-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors">{c.label}:</span>
                      <span className="text-white truncate">{c.val}</span>
                    </a>
                  ))}
                </div>
              </div>
              <form onSubmit={e => e.preventDefault()} className="space-y-6">
                <input type="text" placeholder="SUBJECT_IDENTIFIER" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-xs font-mono focus:border-blue-500/50 outline-none" />
                <textarea rows={4} placeholder="TRANSMISSION_CONTENT" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-xs font-mono focus:border-blue-500/50 outline-none resize-none" />
                <button className="w-full py-5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white hover:text-black transition-all">
                  Transmitir Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <Box className="w-6 h-6 text-blue-500" />
            <div className="text-xl font-black text-white">RODRIGO<span className="text-blue-500">.</span>DEV</div>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Devolprodrigov" target="_blank" rel="noreferrer"><Github className="w-5 h-5 hover:text-white cursor-pointer" /></a>
            <a href="https://www.linkedin.com/in/rodrigo-vieira-408b6295/" target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5 hover:text-blue-500 cursor-pointer" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
