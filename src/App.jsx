import { useState } from 'react'
import { Mail, Linkedin, Github, ExternalLink, Zap, Database, Code, Globe, ChevronDown, Bot, Home, Utensils } from 'lucide-react'

const projects = [
  {
    icon: Home,
    name: 'Hermes Atrium',
    subtitle: 'Real Estate Aggregator',
    description: 'Real-time property data aggregator pulling listings from Funda & Pararius with automated WhatsApp alerts. Agents get notified before competitors.',
    tech: ['n8n', 'Supabase', 'React', 'WhatsApp API'],
    color: 'from-blue-500 to-cyan-500',
    status: 'Live',
  },
  {
    icon: Bot,
    name: 'Olimpo O.S.',
    subtitle: 'AI Business Automation',
    description: 'Full AI automation operating system for SMEs — from lead capture to reporting, fully automated. Eliminates hundreds of manual hours per month.',
    tech: ['n8n', 'OpenAI', 'Supabase', 'Webhooks'],
    color: 'from-purple-500 to-pink-500',
    status: 'In Development',
  },
  {
    icon: Utensils,
    name: 'Brother Kitchen',
    subtitle: 'Restaurant Automation',
    description: 'Operational workflow automation for food & hospitality sector — orders, inventory, scheduling. Fully integrated with existing POS systems.',
    tech: ['n8n', 'REST APIs', 'Google Cloud', 'React'],
    color: 'from-orange-500 to-red-500',
    status: 'Live',
  },
]

const skills = [
  { name: 'n8n', icon: Zap, level: 95 },
  { name: 'Supabase', icon: Database, level: 90 },
  { name: 'React', icon: Code, level: 80 },
  { name: 'REST APIs', icon: Globe, level: 92 },
  { name: 'Python', icon: Code, level: 75 },
  { name: 'Google Cloud', icon: Globe, level: 85 },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            EG.
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            {['About', 'Projects', 'Skills', 'Contact'].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Open to freelance projects · Lelystad, NL
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I don&apos;t just code.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              I build systems.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Businesses waste hundreds of hours on manual, repetitive tasks.
            I eliminate them — with custom AI automation workflows that run 24/7 without human intervention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-sm mx-auto text-center">
            {[['3+', 'Years Building'], ['10+', 'Projects Shipped'], ['8', 'GCP Certs']].map(([num, label]) => (
              <div key={label}>
                <div className="text-3xl font-bold text-white">{num}</div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-600 mx-auto" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Build</h2>
            <p className="text-gray-400 text-lg">Real systems solving real business problems.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.name}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all hover:-translate-y-1 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{p.name}</h3>
                      <p className="text-sm text-gray-500">{p.subtitle}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${p.status === 'Live' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'}`}>
                      {p.status}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-md">{t}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-gray-400 text-lg">Tools I use to build automation systems.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.name} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">{s.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{s.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Automation', detail: 'n8n Expert' },
              { label: 'Backend', detail: 'Supabase + PostgreSQL' },
              { label: 'Cloud', detail: '8x GCP Certified' },
              { label: 'Frontend', detail: 'React + Tailwind' },
            ].map(item => (
              <div key={item.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="text-blue-400 font-semibold text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs mt-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-gray-400 text-lg mb-10">
            Have a business process that wastes your team&apos;s time?
            Let&apos;s automate it. Based in Lelystad — working remotely across NL & EU.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:emanuele@underground.team"
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
            <a
              href="https://linkedin.com/in/emanuele-g"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/polyglottentacle"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="text-gray-600 text-sm">
            Italian (native) · Dutch · English · Spanish
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-600 text-sm">
        <p>© 2026 Emanuele G. — Underground Team · AI Automation Specialist · Lelystad, NL</p>
      </footer>
    </div>
  )
}
