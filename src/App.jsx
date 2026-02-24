import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Map as MapIcon, ShoppingCart, Lock, ArrowRight, User, Zap, Github, Instagram, Linkedin, Cpu, Star, Rocket, X, Globe, Youtube, Award } from 'lucide-react';

// --- DIZIONARIO MULTILINGUA AGGIORNATO PER EMANUELE_G ---
const content = {
  en: {
    nav: { incoming: "INCOMING TRANSMISSION", map: "GALACTIC MAP 🚀", ships: "The Motherships", abduction: "ABDUCTION ZONE 🛸", certs: "CERTIFIED INTEL 📜" },
    hero: { 
      dontCode: "I don't just code.", 
      build: "I BUILD", 
      systems: "SYSTEMS.", 
      desc: "Extraterrestrial automation. An established operator in Lelystad scaling exponentially by merging field experience with AI architecture and programming." 
    },
    journey: {
      title: "The Invasion (Zero to Hero)",
      step1Title: "The Landing (Field Operator)",
      step1Desc: "I know real-world pressure. Operating complex production lines and fast-paced commercial kitchens in Lelystad forged me in absolute pragmatism.",
      step2Title: "The Evolution (Beyond Paper)",
      step2Desc: "More than just paper certificates, I build real apps, web systems, and automations. My Trojan Horse is Hermes: scanning a target sector to completely dominate it with n8n and AI agents."
    },
    buttons: { unlock: "Unlock Module", contact: "Contact the Mothership", close: "Close Transmission", github: "View Source Code", watchVideo: "Watch AI Playlist" },
    footer: {
      title: "Get Abducted in 2026",
      desc: "Stop paying terrestrial developers for static sites. Hire an Automation Ranger to build the ecosystem (n8n + React + AI) that will dominate your industry."
    },
    projects: [
      {
        id: 'youtube', title: 'AI Content Engine', role: '24/7 DIGITAL AMBASSADOR', tag: 'GEN-AI 🐙',
        desc: "Turn your knowledge into a lead-generation machine. I build autonomous content factories so you never have to step in front of a camera.",
        details: "Using ElevenLabs and Gen-AI, I create your hyper-realistic avatar and clone your voice. You just type a Google Doc; my system outputs a fully edited, subtitled, viral-ready video. It's literally like having a full-time video agency on your payroll, working for a fraction of the cost.",
        link: "https://www.youtube.com/playlist?list=PLIDBFObrLVJ35fhXlJRAODnu1L5E9mHCF"
      },
      {
        id: 'olimpo', title: 'Olimpo O.S.', role: 'COMPANY NERVOUS SYSTEM', tag: 'BUSINESS HUB 👽',
        desc: "Your business is leaking money through manual copy-pasting and disconnected software. I build the cure.",
        details: "Olimpo isn't just a dashboard; it's a customized digital brain built with React and D3.js. It ingests data from your CRM, emails, and inventory. Behind the scenes, autonomous AI agents route tasks, draft client replies, and flag bottlenecks before they happen. I automate the boring stuff so you can focus on scaling."
      },
      {
        id: 'hermes', title: 'Hermes Atrium', role: 'LEGAL CHEAT CODE', tag: 'SCRAPING 👾',
        desc: "In real estate, the fastest wins. Hermes is an unfair advantage that alerts you to new deals before competitors even refresh their page.",
        details: "A military-grade scraping architecture. Hermes bypasses Cloudflare protections, stealthily extracts listings from Funda/Pararius, processes the data through Supabase, and triggers instant WhatsApp alerts via n8n. While your competitors are sleeping or browsing manually, your phone is already ringing with the best deals."
      },
      {
        id: 'brother', title: 'Brother Kitchen', role: 'SALES FUNNEL', tag: 'LOCAL BIZ 🛸',
        desc: "Why pay 30% fees to delivery platforms? I built a direct, zero-friction ordering system for local restaurants.",
        details: "A lightning-fast, mobile-optimized landing page that bypasses heavy e-commerce setups. Customers click, order, and the request is injected directly into the kitchen's WhatsApp. Maximum conversion, zero middleman fees."
      },
      {
        id: 'red', title: 'Smart Contracts', role: 'DYNAMIC FORMS', tag: 'ONBOARDING 🧠',
        desc: "Transform boring PDF contracts and onboarding forms into interactive, intelligent web applications.",
        details: "Originally 'Project Red', this is a framework for complex data collection. Instead of sending static documents to clients or new hires, I build dynamic UI flows that adapt based on user answers, streamlining HR and legal processes."
      }
    ]
  },
  nl: {
    nav: { incoming: "INKOMENDE TRANSMISSIE", map: "GALACTISCHE KAART 🚀", ships: "De Moederschepen", abduction: "ONTVOERINGSZONE 🛸", certs: "GECERTIFICEERDE INTEL 📜" },
    hero: { 
      dontCode: "Ik typ niet alleen code.", 
      build: "IK BOUW", 
      systems: "SYSTEMEN.", 
      desc: "Buitenaardse automatisering. Een gevestigde operator in Lelystad die exponentieel opschaalt door praktijkervaring te fuseren met programmeren en AI-architectuur." 
    },
    journey: {
      title: "De Invasie (Zero to Hero)",
      step1Title: "De Landing (Praktijk Operator)",
      step1Desc: "Ik ken de druk van de echte wereld. Het draaien van complexe productielijnen en keukens in Lelystad gaf me extreem pragmatisme.",
      step2Title: "De Evolutie (Voorbij het Papier)",
      step2Desc: "Meer dan diploma's, ik bouw echte apps en n8n automatiseringen. Mijn Paard van Troje is Hermes: een doelsector scannen om deze te domineren met AI agenten."
    },
    buttons: { unlock: "Module Ontgrendelen", contact: "Neem Contact Op", close: "Sluit Transmissie", github: "Bekijk Broncode", watchVideo: "Bekijk AI Playlist" },
    footer: {
      title: "Word Ontvoerd in 2026",
      desc: "Stop met het betalen van aardse ontwikkelaars voor statische sites. Huur een Automation Ranger in om het ecosysteem (n8n + React + AI) te bouwen dat jouw sector zal domineren."
    },
    projects: [
      {
        id: 'youtube', title: 'AI Content Engine', role: '24/7 DIGITALE AMBASSADEUR', tag: 'GEN-AI 🐙',
        desc: "Verander je kennis in een leadgeneratie-machine. Ik bouw autonome contentfabrieken zodat je nooit meer voor een camera hoeft te staan.",
        details: "Met ElevenLabs en Gen-AI creëer ik jouw hyperrealistische avatar en kloon ik je stem. Jij typt een tekst; mijn systeem levert een perfect gemonteerde, virale video. Alsof je een fulltime video-bureau in dienst hebt, maar dan voor een fractie van de kosten.",
        link: "https://www.youtube.com/playlist?list=PLIDBFObrLVJ35fhXlJRAODnu1L5E9mHCF"
      },
      {
        id: 'olimpo', title: 'Olimpo O.S.', role: 'ZENUWSTELSEL VAN JE BEDRIJF', tag: 'BUSINESS HUB 👽',
        desc: "Je bedrijf lekt geld door handmatig knip-en-plakwerk en losgekoppelde software. Ik bouw de oplossing.",
        details: "Olimpo is niet zomaar een dashboard; het is een digitaal brein op maat. Het verzamelt data uit je CRM, e-mails en voorraad. Op de achtergrond gebruiken AI-agenten deze data om taken te sturen, klantmails te beantwoorden en knelpunten te signaleren voordat ze ontstaan. Ik automatiseer het saaie werk."
      },
      {
        id: 'hermes', title: 'Hermes Atrium', role: 'LEGAAL CHEAT CODE', tag: 'SCRAPING 👾',
        desc: "In vastgoed wint de snelste. Hermes is een oneerlijk voordeel dat je waarschuwt voor nieuwe deals voordat concurrenten hun pagina vernieuwen.",
        details: "Een scraping-architectuur van militair niveau. Hermes omzeilt Cloudflare, haalt ongemerkt advertenties van Funda/Pararius, verwerkt ze via Supabase en stuurt direct WhatsApp-alerts via n8n. Terwijl je concurrenten slapen of handmatig zoeken, heb jij de beste deal al binnen."
      },
      {
        id: 'brother', title: 'Brother Kitchen', role: 'SALES FUNNEL', tag: 'LOKAAL ZAKELIJK 🛸',
        desc: "Waarom 30% commissie betalen aan bezorgplatforms? Ik bouwde een wrijvingsloos bestelsysteem voor lokale restaurants.",
        details: "Een razendsnelle landingspagina zonder zware e-commerce. Klanten klikken, bestellen en het verzoek gaat direct naar de WhatsApp van de keuken. Maximale conversie, nul kosten voor tussenpersonen."
      },
      {
        id: 'red', title: 'Smart Contracts', role: 'DYNAMISCHE FORMULIEREN', tag: 'ONBOARDING 🧠',
        desc: "Transformeer saaie PDF-contracten en onboarding-formulieren in interactieve, intelligente webapplicaties.",
        details: "Een framework voor complexe gegevensverzameling. In plaats van statische documenten naar klanten of nieuw personeel te sturen, bouw ik dynamische flows die zich aanpassen aan de antwoorden, wat HR- en juridische processen stroomlijnt."
      }
    ]
  },
  it: {
    nav: { incoming: "TRASMISSIONE IN ARRIVO", map: "MAPPA GALATTICA 🚀", ships: "Le Navi Madri", abduction: "ZONA DI RAPIMENTO 🛸", certs: "INTEL CERTIFICATA 📜" },
    hero: { 
      dontCode: "Non scrivo solo codice.", 
      build: "COSTRUISCO", 
      systems: "SISTEMI.", 
      desc: "Automazione extraterrestre. Un operatore consolidato a Lelystad che sta scalando esponenzialmente unendo l'esperienza sul campo con la programmazione e l'architettura IA." 
    },
    journey: {
      title: "L'Invasione (Zero to Hero)",
      step1Title: "L'Atterraggio (Operatore sul Campo)",
      step1Desc: "Conosco la pressione del mondo reale. Gestire linee di produzione complesse e cucine commerciali a Lelystad mi ha forgiato nel pragmatismo assoluto.",
      step2Title: "L'Evoluzione (Oltre la Carta)",
      step2Desc: "Non ho solo diplomi. Costruisco app, siti e automazioni reali. Il mio Cavallo di Troia è Hermes: scansionare un intero settore per dominarlo con agenti IA e n8n."
    },
    buttons: { unlock: "Sblocca Modulo", contact: "Contatta la Nave Madre", close: "Chiudi Trasmissione", github: "Vedi Codice Sorgente", watchVideo: "Guarda Playlist IA" },
    footer: {
      title: "Fatti Rapire nel 2026",
      desc: "Smetti di pagare sviluppatori terrestri per siti statici. Assumi un Automation Ranger per costruire l'ecosistema (n8n + React + IA) che dominerà il tuo settore."
    },
    projects: [
      {
        id: 'youtube', title: 'AI Content Engine', role: 'AMBASCIATORE DIGITALE 24/7', tag: 'GEN-AI 🐙',
        desc: "Trasforma la tua competenza in una macchina genera-contatti. Costruisco fabbriche di contenuti autonome così non dovrai mai metterti davanti a una telecamera.",
        details: "Uso ElevenLabs e Gen-AI per creare il tuo avatar iper-realistico e clonare la tua voce. Tu scrivi un testo su Word; il mio sistema sforna un video perfetto, montato, sottotitolato e pronto per diventare virale. È come avere un'agenzia video interna che lavora giorno e notte a una frazione del costo.",
        link: "https://www.youtube.com/playlist?list=PLIDBFObrLVJ35fhXlJRAODnu1L5E9mHCF"
      },
      {
        id: 'olimpo', title: 'Olimpo O.S.', role: 'SISTEMA NERVOSO AZIENDALE', tag: 'BUSINESS HUB 👽',
        desc: "La tua azienda perde soldi ogni giorno in noiosi copia-incolla e software che non dialogano. Io costruisco la cura.",
        details: "Olimpo non è una semplice dashboard, è un 'cervello digitale' su misura costruito in React. Assorbe i dati da CRM, email e magazzino. Dietro le quinte, agenti IA autonomi smistano i task, preparano risposte per i clienti e segnalano colli di bottiglia prima che esplodano. Elimino il lavoro manuale per farti scalare il business."
      },
      {
        id: 'hermes', title: 'Hermes Atrium', role: 'VANTAGGIO SLEALE', tag: 'SCRAPING 👾',
        desc: "Nel mercato immobiliare chi arriva primo vince. Hermes ti avvisa dei nuovi affari prima ancora che i tuoi competitor aggiornino la pagina.",
        details: "Un'architettura di estrazione dati di livello militare. Hermes bypassa le protezioni anti-bot Cloudflare, estrae silenziosamente gli annunci da Funda/Pararius e ti invia alert istantanei su WhatsApp tramite n8n. Mentre i tuoi concorrenti dormono o cercano a mano, il tuo telefono sta già suonando con i deal migliori."
      },
      {
        id: 'brother', title: 'Brother Kitchen', role: 'SALES FUNNEL', tag: 'LOCAL BIZ 🛸',
        desc: "Perché pagare il 30% di commissioni a UberEats o Thuisbezorgd? Ho costruito un sistema di ordini diretto e senza attrito per i ristoranti locali.",
        details: "Una landing page velocissima che evita i pesanti sistemi e-commerce. Il cliente clicca, ordina, e la richiesta viene iniettata direttamente nel WhatsApp della cucina. Massima conversione, zero costi di intermediazione."
      },
      {
        id: 'red', title: 'Smart Contracts', role: 'MODULI DINAMICI', tag: 'ONBOARDING 🧠',
        desc: "Trasforma noiosi contratti PDF e moduli di assunzione in applicazioni web interattive e intelligenti.",
        details: "Nato come 'Project Red', questo è un framework per la raccolta dati complessa. Invece di mandare documenti statici a clienti o dipendenti, costruisco flussi dinamici che si adattano in base alle risposte dell'utente, semplificando le procedure HR e legali."
      }
    ]
  }
};

// Manteniamo i colori di sfondo brutalisti per i progetti
const projectColors = {
  youtube: 'bg-[#FF0050]',
  olimpo: 'bg-[#00E5FF]',
  brother: 'bg-[#FF4D4D]',
  hermes: 'bg-[#FFC900]',
  red: 'bg-[#B05BFF]'
};

// SVGs Animati Personalizzati per ogni progetto
const ProjectVisual = ({ id }) => {
  const visuals = {
    youtube: (
      <svg viewBox="0 0 200 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="150" fill="#0B0B1A"/>
        {[20,35,50,65,80,95,110,125,140,155,170].map((x, i) => (
          <rect key={i} x={x} y="75" width="8" rx="4"
            fill="#FF0050"
            style={{
              animation: `audioBar 0.8s ease-in-out ${i * 0.07}s infinite alternate`,
              transformOrigin: `${x+4}px 75px`
            }}
          />
        ))}
        <circle cx="100" cy="75" r="30" fill="none" stroke="#FF0050" strokeWidth="3" opacity="0.4"/>
        <polygon points="90,60 90,90 115,75" fill="#FF0050"/>
        <text x="100" y="130" textAnchor="middle" fill="#FF0050" fontSize="10" fontFamily="monospace" fontWeight="bold">AI CONTENT ENGINE</text>
        <style>{`@keyframes audioBar { from { height: 10px; y: 70px; } to { height: 50px; y: 50px; } }`}</style>
      </svg>
    ),
    olimpo: (
      <svg viewBox="0 0 200 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="150" fill="#0B0B1A"/>
        {[0,1,2,3].map(row => [0,1,2,3,4].map(col => (
          <rect key={`${row}-${col}`} x={10 + col*38} y={10 + row*28} width="30" height="20" rx="2"
            fill="#00E5FF" opacity={Math.random() > 0.5 ? 0.8 : 0.2}
            style={{ animation: `blink 1.${row+col}s ease-in-out infinite alternate` }}
          />
        )))}
        <line x1="30" y1="75" x2="170" y2="75" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
        <text x="100" y="140" textAnchor="middle" fill="#00E5FF" fontSize="10" fontFamily="monospace" fontWeight="bold">OLIMPO O.S.</text>
        <style>{`@keyframes blink { from { opacity: 0.1; } to { opacity: 0.9; } }`}</style>
      </svg>
    ),
    hermes: (
      <svg viewBox="0 0 200 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="150" fill="#0B0B1A"/>
        <circle cx="100" cy="75" r="55" fill="none" stroke="#FFC900" strokeWidth="1" opacity="0.3"/>
        <circle cx="100" cy="75" r="35" fill="none" stroke="#FFC900" strokeWidth="1" opacity="0.4"/>
        <circle cx="100" cy="75" r="15" fill="none" stroke="#FFC900" strokeWidth="1" opacity="0.6"/>
        <circle cx="100" cy="75" r="3" fill="#FFC900"/>
        <line x1="100" y1="75" x2="100" y2="20" stroke="#FFC900" strokeWidth="2" opacity="0.9"
          style={{ animation: 'radarSpin 2s linear infinite', transformOrigin: '100px 75px' }}/>
        <circle cx="130" cy="50" r="4" fill="#FF4D4D" style={{ animation: 'blip 2s ease-in-out infinite' }}/>
        <circle cx="75" cy="90" r="3" fill="#FF4D4D" style={{ animation: 'blip 2s 0.7s ease-in-out infinite' }}/>
        <text x="100" y="145" textAnchor="middle" fill="#FFC900" fontSize="10" fontFamily="monospace" fontWeight="bold">HERMES RADAR</text>
        <style>{`
          @keyframes radarSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes blip { 0%,100% { opacity:0; r:2; } 50% { opacity:1; r:5; } }
        `}</style>
      </svg>
    ),
    brother: (
      <svg viewBox="0 0 200 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="150" fill="#0B0B1A"/>
        <circle cx="100" cy="65" r="40" fill="#25D366" opacity="0.15" style={{ animation: 'ping 1.5s ease-out infinite' }}/>
        <circle cx="100" cy="65" r="28" fill="#25D366"/>
        <text x="100" y="72" textAnchor="middle" fontSize="22" fontFamily="monospace">💬</text>
        <path d="M 50 105 Q 100 90 150 105" stroke="#FF4D4D" strokeWidth="2" fill="none" strokeDasharray="4,3"/>
        <polygon points="148,100 155,105 148,110" fill="#FF4D4D"/>
        <text x="100" y="130" textAnchor="middle" fill="#FF4D4D" fontSize="9" fontFamily="monospace" fontWeight="bold">ORDER → KITCHEN</text>
        <style>{`@keyframes ping { 0%{ r:28; opacity:0.15; } 100%{ r:50; opacity:0; } }`}</style>
      </svg>
    ),
    red: (
      <svg viewBox="0 0 200 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="150" fill="#0B0B1A"/>
        <rect x="55" y="15" width="90" height="110" rx="4" fill="#1a1a2e" stroke="#B05BFF" strokeWidth="2"/>
        {[35,52,69,86,103].map((y, i) => (
          <g key={i}>
            <rect x="65" y={y} width="50" height="8" rx="2" fill="#B05BFF" opacity="0.3"/>
            <rect x="65" y={y} width={`${20 + i*6}`} height="8" rx="2" fill="#B05BFF" opacity="0.8"
              style={{ animation: `typeIn 3s ${i * 0.4}s ease-out infinite` }}/>
          </g>
        ))}
        <circle cx="145" cy="110" r="12" fill="#00E5FF"/>
        <text x="145" y="115" textAnchor="middle" fontSize="14" fontFamily="monospace">✓</text>
        <style>{`@keyframes typeIn { 0%,100% { width: 5px; } 50% { width: ${60}px; } }`}</style>
      </svg>
    )
  };
  return visuals[id] || null;
};

// Statistiche del Profilo
const stats = [
  { value: '5+', label: 'Live Projects' },
  { value: '8', label: 'Google Certs' },
  { value: '3', label: 'Languages (NL/EN/IT)' },
  { value: '∞', label: 'Automations Built' },
];

// Sezione Animata
const AnimatedSection = ({ children, direction = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.1 });
    if(domRef.current) observer.observe(domRef.current);
    return () => { if(domRef.current) observer.unobserve(domRef.current); };
  }, []);

  const slideClass = direction === 'left' 
    ? (isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0')
    : (isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0');

  return (
    <div ref={domRef} className={`transition-all duration-1000 ease-out transform ${slideClass} mb-24 md:mb-32`}>
      {children}
    </div>
  );
};

// Sticker Brutalista
const Sticker = ({ children, className }) => (
  <div className={`absolute border-[3px] border-black text-black font-black uppercase px-3 py-1 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className} z-20`}>
    {children}
  </div>
);

// Dati delle Certificazioni Google / Coursera
const certifications = [
  { id: 1, title: 'Google Prompting Essentials', issuer: 'Google (4 Corsi)', date: 'Oct 2025' },
  { id: 2, title: 'AI Innovation', issuer: 'Google Cloud', date: 'Oct 2025' },
  { id: 3, title: 'Trust and Security', issuer: 'Google Cloud', date: 'Oct 2025' },
  { id: 4, title: 'Scaling Operations', issuer: 'Google Cloud', date: 'Oct 2025' },
  { id: 5, title: 'Data Transformation', issuer: 'Google Cloud', date: 'Oct 2025' },
  { id: 6, title: 'Digital Transformation', issuer: 'Google Cloud', date: 'Oct 2025' },
  { id: 7, title: 'Core Infrastructure', issuer: 'Google Cloud', date: 'Oct 2025' },
  { id: 8, title: 'Modernize Infrastructure', issuer: 'Google Cloud', date: 'Oct 2025' }
];

export default function App() {
  const [lang, setLang] = useState('en'); 
  const [selectedProject, setSelectedProject] = useState(null); 
  
  const t = content[lang]; 
  const currentProjects = t.projects.map(p => ({ ...p, color: projectColors[p.id] }));

  // SEO e Titolo Pagina
  useEffect(() => {
    document.title = "Emanuele G. | Automation Ranger | Lelystad";
  }, []);

  // Keyboard trap per chiudere il modal con Esc
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setSelectedProject(null); };
    if (selectedProject) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#0B0B1A] text-white font-sans selection:bg-[#00E5FF] selection:text-black overflow-x-hidden relative">
      
      {/* CSS custom scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0B0B1A; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #00E5FF; border-radius: 3px; }
      `}</style>

      {/* LANGUAGE SWITCHER */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-black border-[3px] border-[#00E5FF] p-2 shadow-[4px_4px_0px_0px_rgba(0,229,255,1)]">
        <Globe size={20} className="text-[#00E5FF]" />
        <button onClick={() => setLang('en')} className={`font-black uppercase px-2 py-1 ${lang === 'en' ? 'bg-[#00E5FF] text-black' : 'text-gray-400 hover:text-white'}`}>EN</button>
        <button onClick={() => setLang('nl')} className={`font-black uppercase px-2 py-1 ${lang === 'nl' ? 'bg-[#00E5FF] text-black' : 'text-gray-400 hover:text-white'}`}>NL</button>
        <button onClick={() => setLang('it')} className={`font-black uppercase px-2 py-1 ${lang === 'it' ? 'bg-[#00E5FF] text-black' : 'text-gray-400 hover:text-white'}`}>IT</button>
      </div>

      {/* SFONDO SPAZIALE */}
      <div className="fixed inset-0 pointer-events-none opacity-40" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* ELEMENTI SPAZIALI FLUTTUANTI */}
      <div className="fixed top-20 right-10 animate-pulse text-4xl pointer-events-none opacity-50">🛸</div>
      <div className="fixed bottom-40 left-10 animate-bounce text-4xl pointer-events-none opacity-50">👾</div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        
        {/* HERO SECTION NEON-BRUTALISTA */}
        <header className="mb-24 flex flex-col md:flex-row items-center gap-12 relative">
          <Sticker className="-rotate-12 top-0 left-0 md:-left-10 bg-[#FFC900]">{t.nav.incoming}</Sticker>
          
          <div className="relative shrink-0 mt-8 md:mt-0">
            <div className="w-56 h-56 bg-[#0B0B1A] border-[6px] border-[#00E5FF] rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,229,255,0.6)] flex items-center justify-center overflow-hidden relative group transform -rotate-3 hover:rotate-0 transition-transform">
              {/* Avatar Astronauta SVG Animato */}
              <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="#0B0B1A"/>
                {/* Corpo astronauta stilizzato */}
                <circle cx="100" cy="70" r="35" fill="none" stroke="#00E5FF" strokeWidth="4"/>
                <circle cx="100" cy="70" r="25" fill="#00E5FF" opacity="0.15"/>
                {/* Visiera */}
                <circle cx="100" cy="70" r="18" fill="#00E5FF" opacity="0.3"/>
                <text x="100" y="77" textAnchor="middle" fontSize="20" fontFamily="monospace">🐙</text>
                {/* Corpo */}
                <rect x="72" y="108" width="56" height="50" rx="8" fill="none" stroke="#00E5FF" strokeWidth="3"/>
                <rect x="82" y="115" width="36" height="8" rx="2" fill="#00E5FF" opacity="0.4"/>
                {/* Badge E_G */}
                <rect x="83" y="128" width="34" height="18" rx="3" fill="#FFC900"/>
                <text x="100" y="141" textAnchor="middle" fill="black" fontSize="9" fontFamily="monospace" fontWeight="bold">E_G</text>
                {/* Orbita animata */}
                <circle cx="100" cy="100" r="70" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="8,6" opacity="0.3"
                  style={{ animation: 'orbitSpin 8s linear infinite', transformOrigin: '100px 100px' }}/>
                <circle cx="100" cy="30" r="5" fill="#FFC900"
                  style={{ animation: 'orbitSpin 8s linear infinite', transformOrigin: '100px 100px' }}/>
                <style>{`@keyframes orbitSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-8 bg-black border-[4px] border-[#00E5FF] px-6 py-3 rotate-6 shadow-[8px_8px_0px_0px_rgba(0,229,255,0.6)]">
              <span className="text-2xl font-black text-[#00E5FF] tracking-widest">EMANUELE_G</span>
            </div>
          </div>
          
          <div className="text-center md:text-left relative">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-[0.9] text-white">
              {t.hero.dontCode}<br />
              <span className="bg-[#FF4D4D] text-black px-2 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] inline-block mt-3 mb-2 transform -rotate-2">{t.hero.build}</span><br />
              {t.hero.systems}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-bold max-w-md border-l-[6px] border-[#00E5FF] pl-4 bg-white/5 p-4 rounded-r-lg backdrop-blur-sm">
              {t.hero.desc}
            </p>
          </div>
        </header>

        {/* JOURNEY / GALACTIC MAP */}
        <AnimatedSection direction="left">
          <div className="bg-white border-[6px] border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,229,255,1)] mb-32 relative rounded-xl text-black">
            <Sticker className="rotate-6 -top-5 -right-5 bg-[#B05BFF] text-white border-white">{t.nav.map}</Sticker>
            
            <div className="flex items-center gap-4 mb-8">
              <MapIcon className="text-[#FF4D4D]" size={48} />
              <h2 className="text-3xl md:text-4xl uppercase font-black">{t.journey.title}</h2>
            </div>
            
            {/* Timeline Fix per Mobile */}
            <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:left-[27px] md:before:left-1/2 before:h-full before:w-[4px] before:bg-black">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-[4px] border-black bg-[#FFC900] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 font-black text-2xl">1</div>
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] bg-[#F0F0F0] border-[4px] border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                  <div className="font-black text-xl md:text-2xl mb-2 uppercase">{t.journey.step1Title}</div>
                  <div className="font-bold text-sm md:text-base text-gray-700">{t.journey.step1Desc}</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-[4px] border-black bg-[#00E5FF] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 font-black text-2xl">2</div>
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] bg-[#F0F0F0] border-[4px] border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                  <div className="font-black text-xl md:text-2xl mb-2 uppercase">{t.journey.step2Title}</div>
                  <div className="font-bold text-sm md:text-base text-gray-700">{t.journey.step2Desc}</div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* CERTIFIED INTEL - CAROSELLO DIPLOMI */}
        <AnimatedSection direction="right">
          <div className="mb-32 relative">
            <Sticker className="-rotate-3 -top-5 left-5 bg-[#FFC900] text-black border-black z-30">{t.nav.certs}</Sticker>
            
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x custom-scrollbar pt-8 px-4 border-[6px] border-black bg-white shadow-[16px_16px_0px_0px_rgba(255,77,77,1)] rounded-xl">
              {certifications.map((cert) => (
                <div key={cert.id} className="min-w-[260px] md:min-w-[300px] bg-black border-[4px] border-[#00E5FF] p-6 shrink-0 snap-center hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,229,255,0.6)] group relative flex flex-col justify-between cursor-default">
                  <div>
                    <Award size={40} className="text-[#FF4D4D] mb-4 group-hover:scale-110 group-hover:text-[#FFC900] transition-all duration-300" />
                    <h3 className="text-xl font-black text-white uppercase mb-2 leading-tight">{cert.title}</h3>
                  </div>
                  <div className="mt-6 border-t-[2px] border-gray-800 pt-4">
                    <div className="text-[#00E5FF] font-bold text-sm tracking-widest uppercase mb-1">{cert.issuer}</div>
                    <div className="text-gray-400 text-xs font-bold uppercase">{cert.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* PROJECTS SECTION - THE MOTHERSHIPS */}
        <div className="space-y-40">
          <div className="text-center mb-24 relative">
            <h2 className="text-5xl md:text-6xl font-black uppercase inline-block bg-white text-black px-8 py-3 border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(176,91,255,1)] transform -rotate-3">
              {t.nav.ships}
            </h2>
          </div>
          
          {currentProjects.map((proj, index) => (
            <AnimatedSection key={proj.id} direction={index % 2 === 0 ? 'right' : 'left'}>
              <div className={`group relative ${proj.color} border-[6px] border-black p-6 md:p-10 shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] hover:translate-x-2 hover:-translate-y-2 hover:shadow-[24px_24px_0px_0px_rgba(255,255,255,1)] transition-all rounded-xl`}>
                
                <Sticker className={`bg-white text-black -rotate-6 -top-5 -right-5 border-black`}>
                  {proj.tag}
                </Sticker>

                <div className="flex flex-col md:flex-row gap-8 items-stretch">
                  <div className="w-full md:w-1/3 shrink-0 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#0B0B1A] overflow-hidden relative min-h-[150px] md:min-h-[200px] group-hover:scale-105 transition-transform duration-500">
                    <ProjectVisual id={proj.id} />
                  </div>
                  
                  <div className="flex-1 text-black flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-black uppercase tracking-widest text-black bg-white px-3 py-1 border-[3px] border-black text-xs md:text-sm">
                          {proj.role}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,0.5)]">
                        {proj.title}
                      </h3>
                      <p className="text-lg md:text-xl font-bold mb-8 leading-snug text-black/90">
                        {proj.desc}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedProject(proj)}
                      className="self-start flex items-center gap-4 bg-black text-white px-6 md:px-8 py-3 md:py-4 uppercase font-black tracking-widest text-sm md:text-lg hover:bg-white hover:text-black transition-all border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {t.buttons.unlock} <Rocket size={24} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-24 relative z-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white border-[4px] border-black p-6 text-center shadow-[8px_8px_0px_0px_rgba(176,91,255,1)] hover:-translate-y-1 transition-transform">
              <div className="text-5xl font-black text-black mb-2">{s.value}</div>
              <div className="text-sm font-black uppercase text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ABDUCTION CONTACT FOOTER */}
        <footer className="mt-40 text-center pb-20">
          <div className="inline-block bg-[#00E5FF] border-[6px] border-black p-10 md:p-16 shadow-[16px_16px_0px_0px_rgba(255,77,77,1)] relative rounded-2xl max-w-2xl w-full transform rotate-1">
            <Sticker className="-rotate-6 -top-6 -left-6 bg-[#FFC900] text-black">{t.nav.abduction}</Sticker>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase text-black leading-tight">
              {t.footer.title}
            </h2>
            <p className="text-lg md:text-xl text-black/80 mb-10 font-bold max-w-md mx-auto">
              {t.footer.desc}
            </p>
            
            <div className="flex justify-center gap-6 mb-10">
               <a href=" https://linkedin.com/in/emanuele-g → https://www.linkedin.com/in/e-g-a5482b355/" target="_blank" rel="noreferrer" className="p-4 border-[4px] border-black bg-white text-black hover:-translate-y-2 hover:bg-[#B05BFF] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                 <Linkedin size={32} />
               </a>
               <a href=" github.com/polyglottentacle"p-4 border-[4px] border-black bg-white text-black hover:-translate-y-2 hover:bg-[#FFC900] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                 <Github size={32} />
               </a>
            </div>
            
            <a href="mailto:polyglottentacle@gmail.com" className="block w-full bg-black text-white py-6 text-xl md:text-2xl font-black uppercase tracking-widest border-[4px] border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
              {t.buttons.contact}
            </a>
          </div>
        </footer>

      </div>

      {/* MODAL DETTAGLI PROGETTO */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className={`${selectedProject.color} border-[6px] border-black p-6 md:p-10 max-w-3xl w-full shadow-[20px_20px_0px_0px_rgba(255,255,255,1)] relative overflow-y-auto max-h-[90vh] custom-scrollbar`}
            onClick={(e) => e.stopPropagation()}
          >
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute -top-6 -right-6 bg-white border-[4px] border-black p-2 hover:bg-[#FF4D4D] hover:scale-110 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10"
            >
              <X size={32} className="text-black" />
            </button>

            <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-4 tracking-tighter">
              {selectedProject.title}
            </h2>
            
            <div className="bg-white border-[4px] border-black p-6 mb-8 text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-black text-xl mb-2 uppercase">System Log & Architecture:</h3>
              <p className="font-bold text-lg leading-relaxed">{selectedProject.details}</p>
              
              {/* BOTTONE LINK YOUTUBE (appare solo se il progetto ha un link) */}
              {selectedProject.link && (
                <div className="mt-6">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#FF0050] text-white px-6 py-3 uppercase font-black tracking-widest text-sm border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform"
                  >
                    <Youtube size={20} /> {t.buttons.watchVideo}
                  </a>
                </div>
              )}
            </div>

            <button 
              onClick={() => setSelectedProject(null)}
              className="bg-black text-white px-8 py-4 uppercase font-black tracking-widest text-lg hover:bg-white hover:text-black transition-all border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] w-full text-center"
            >
              {t.buttons.close}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
