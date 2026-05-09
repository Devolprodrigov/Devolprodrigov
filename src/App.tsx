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
  },
  {
    title: "ETL Predictive Pipeline",
    desc: "Pipeline de dados que identifica tendências e gargalos logísticos antes que impactem a operação.",
    tech: ["Python", "Pandas", "SQL"],
    color: "from-violet-600 to-fuchsia-500"
  }
];

const GITHUB_REPOS = [
  {
    name: "Beauty Sabrina",
    desc: "Plataforma de revenda oficial focada em estética e beleza.",
    url: "https://beauty-sabrina.vercel.app/",
    tech: "React / Vercel",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Adriana Reciclagem",
    desc: "Solução industrial para gestão de resíduos com dashboards de controle.",
    url: "https://adriana-reciclagem.vercel.app/",
    tech: "Tailwind CSS",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Rabia Perfumes",
    desc: "Catálogo premium de fragrâncias exclusivas com design de luxo.",
    url: "https://rabia-perfumes-k1nh.vercel.app/",
    tech: "Framer Motion",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Data Automation Pro",
    desc: "Scripts avançados de integração e limpeza de dados industriais.",
    url: "https://github.com/Devolprodrigov",
    tech: "Python / SQL",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800"
  }
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

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

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
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center font-black text-white text-xs">R</div>
            <div className="text-sm font-black tracking-tighter text-white uppercase">RODRIGO<span className="text-blue-500">.</span>DEV</div>
          </div>
          
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            {['Início', 'Carreira', 'Habilidades', 'Formação', 'Projetos', 'Contato'].map((item) => (
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.a href="https://wa.me/5541999279828" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Zap className="w-3 h-3 animate-pulse" /> Disponível para Projetos 💬
            </motion.a>
            <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tight text-white mb-8">
              RODRIGO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">VIEIRA.</span>
            </h1>
            <div className="h-16 flex items-center text-3xl md:text-4xl font-light text-slate-500 mb-12">
              <span className="font-mono text-blue-500 mr-4">_</span>
              <span>{typedText}</span>
              <span className="w-2 h-10 bg-blue-600 ml-2 animate-pulse" />
            </div>
            <div className="flex gap-4">
               <a href="https://github.com/Devolprodrigov" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500 transition-all"><Github className="w-5 h-5" /></a>
               <a href="https://www.linkedin.com/in/rodrigo-vieira-408b6295/" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500 transition-all"><Linkedin className="w-5 h-5" /></a>
               <a href="mailto:rodrigovieiradev@outlook.com" className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500 transition-all"><Mail className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: 'Anos de Dados', val: '04+', icon: <Layers /> },
            { label: 'Processos Automatizados', val: '50+', icon: <Workflow /> },
            { label: 'Empresas Multinacionais', val: '03', icon: <Briefcase /> },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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

      {/* Carreira */}
      <section id="carreira" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Especializações">Perfil Técnico</SectionTitle>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid md:grid-cols-12 gap-8 p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all"
              >
                <div className="md:col-span-3">
                  <span className="text-[10px] font-black text-blue-500 uppercase mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-black text-white mb-2">{exp.company}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-blue-400 text-sm font-bold mb-4 uppercase">{exp.role}</p>
                  <p className="text-slate-400 mb-6">{exp.description}</p>
                  <ul className="space-y-3">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex gap-3 text-sm items-start text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                  {exp.tags.map(t => <span key={t} className="px-3 py-1 bg-white/5 text-[9px] font-black uppercase text-slate-500 rounded-lg">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-32 px-6 bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Core Skills">Habilidades Industriais</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center group hover:border-blue-500/50 transition-all"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {skill.icon}
                </div>
                <h4 className="text-sm font-black text-white uppercase mb-1">{skill.name}</h4>
                <div className="h-1 w-full bg-white/10 rounded-full mt-4 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-blue-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formação */}
      <section id="formação" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Base Acadêmica">Formação</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EDUCATION.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col group">
                <span className="text-[9px] font-black uppercase text-blue-500 mb-2">{edu.period}</span>
                <h4 className="text-xl font-black text-white mb-3 group-hover:text-blue-400">{edu.institution}</h4>
                <p className="text-xs text-slate-400 mb-6 flex-grow">{edu.degree}</p>
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${edu.status === 'Concluído' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  <span className="text-[10px] font-bold uppercase text-slate-500">{edu.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-32 px-6 bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Execução">Projetos de Impacto</SectionTitle>
          <div className="grid md:grid-cols-4 gap-6">
            {PROJECTS.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="relative h-[250px] p-8 rounded-[32px] border border-white/5 bg-[#020617] overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-10 group-hover:opacity-100 transition-all duration-700 pointer-events-none`} />
                <div className="relative z-10 flex flex-col h-full justify-end">
                   <h3 className="text-xl font-black text-white mb-2 uppercase">{p.title}</h3>
                   <p className="text-[10px] text-slate-500 line-clamp-2">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-black text-white mb-12 uppercase tracking-tight">Repositórios GitHub</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {GITHUB_REPOS.map((repo, i) => (
                <motion.a key={i} href={repo.url} target="_blank" rel="noreferrer" whileHover={{ y: -5 }} className="group overflow-hidden rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all">
                   <div className="h-32 overflow-hidden"><img src={repo.image} className="w-full h-full object-cover group-hover:scale-110 transition-all" /></div>
                   <div className="p-6">
                      <h4 className="text-sm font-black text-white mb-2">{repo.name}</h4>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{repo.tech}</p>
                   </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center rounded-[40px] bg-gradient-to-b from-white/[0.05] to-transparent p-20 border border-white/5">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-5xl font-black text-white mb-8 uppercase tracking-tighter">Bora Vencer?</h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="mailto:rodrigovieiradev@outlook.com" className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all">E-mail</a>
              <a href="https://wa.me/5541999279828" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-green-500 transition-all">WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 px-6 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 relative z-10">
        © 2026 RODRIGO.DEV | Built with React 19 + Vite
      </footer>
    </div>
  );
}
