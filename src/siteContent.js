export const identity = {
  name: 'Emanuele Giordano',
  primaryLine: 'I tell stories by building systems.',
  secondaryLine: 'Storyteller · Applied AI · Automation · Operations',
  manifesto: 'I started from real work, then taught myself to turn questions, friction and curiosity into software, agents and experiments.',
}

export const storyChapters = [
  {
    id: 'before-ai',
    label: '01 / BEFORE AI',
    title: 'I learned systems before I learned code.',
    summary: 'Production lines, factories, kitchens and cleaning operations taught me what coordination, pressure, handoffs and failure look like in the real world.',
  },
  {
    id: 'genesis',
    label: '02 / GENESIS',
    title: 'Then I started giving my questions names.',
    summary: 'Olimpo began as a theoretical ecosystem: specialised AI agents, each representing a function, perspective or version of me.',
  },
  {
    id: 'olimpo',
    label: '03 / OLIMPO',
    title: 'One mind. Many specialised voices.',
    summary: 'Atena for strategy, Archimede for technical coordination, Efesto for automation, Hermes for housing, Dioniso for food, Venere for communication, Giunone for clarity — all connected by one evolving system.',
  },
  {
    id: 'matter',
    label: '04 / FROM IDEAS TO MATTER',
    title: 'The screen stopped being enough.',
    summary: 'Workflows became products, voice layers, local memory, dashboards and hardware experiments. The story moved from conversations into things that could be tested.',
  },
  {
    id: 'now',
    label: '05 / NOW',
    title: 'I am learning to ship without losing curiosity.',
    summary: 'The current challenge is not generating more ideas. It is choosing, verifying, publishing and allowing one version to exist in the real world.',
  },
]

export const olympoAgents = [
  { name: 'Atena', role: 'Strategy · priorities · protection from dispersion' },
  { name: 'Archimede', role: 'Technical coordination · memory · implementation' },
  { name: 'Efesto', role: 'Automation · infrastructure · n8n' },
  { name: 'Hermes', role: 'Housing · expat systems · connections' },
  { name: 'Dioniso', role: 'Food · operations · ordering' },
  { name: 'Venere', role: 'Aesthetics · storytelling · communication' },
  { name: 'Giunone', role: 'Clarity · focus · turning chaos into action' },
]

export const featuredWork = [
  {
    slug: 'cleanfood',
    name: 'CleanFood Solutions',
    category: 'Operations platform',
    story: 'Real industrial cleaning work turned into a digital operations concept with evidence, reporting and role-based workflows.',
  },
  {
    slug: 'hermes',
    name: 'Hermes',
    category: 'Housing intelligence',
    story: 'A housing and expat system born from the friction of finding, verifying and acting on opportunities in the Netherlands.',
  },
  {
    slug: 'dioniso',
    name: 'Dioniso',
    category: 'Food automation',
    story: 'Hospitality experience translated into ordering, workflow and customer communication systems.',
  },
  {
    slug: 'cervello-locale',
    name: 'Cervello Locale',
    category: 'Memory system',
    story: 'A response to years of projects, versions and fragmented context: build a system that remembers what actually exists.',
  },
]

export const siteStructure = {
  home: ['hero', 'story-preview', 'olimpo-preview', 'featured-work', 'curiosity', 'contact'],
  deepPages: ['story', 'olimpo', 'work', 'archive'],
  later: ['cv'],
}
