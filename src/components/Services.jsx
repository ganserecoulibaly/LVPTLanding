import React from 'react'

const IconPlaneSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2c-.5.1-.7.6-.4 1L6 12l-2 3.5c-.3.5 0 1.1.5 1.3l4 1.5 1.5 4c.2.5.8.8 1.3.5L14 20l4.6 4.6c.4.4 1 .1 1-.4"/>
  </svg>
)
const IconFork = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><line x1="7" y1="2" x2="7" y2="22"/>
    <path d="M21 15V2s-5 2-5 7.5c0 2.5 1.5 4 5 5.5V22"/>
  </svg>
)
const IconWallet = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
    <path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>
  </svg>
)
const IconMusic = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
  </svg>
)
const IconMuseum = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" y1="22" x2="22" y2="22"/><polyline points="2 11 12 2 22 11"/><line x1="6" y1="11" x2="6" y2="22"/>
    <line x1="10" y1="11" x2="10" y2="22"/><line x1="14" y1="11" x2="14" y2="22"/><line x1="18" y1="11" x2="18" y2="22"/>
  </svg>
)
const IconBed = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/>
    <path d="M6 8v9"/><circle cx="7" cy="7" r="1"/>
  </svg>
)
const IconTicket = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
    <line x1="9" y1="12" x2="15" y2="12"/>
  </svg>
)
const IconUsers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const modules = [
  {
    num: '01', icon: <IconPlaneSearch />, title: 'Recherche de vols & hébergements',
    desc: "Dis-nous où tu veux aller, on s'occupe de comparer pour toi vols et logements — sans te faire perdre la tête.",
    color: 'bg-coral', textColor: 'text-white',
    visual: (
      <div className="mt-4 bg-white p-3 shadow-md rotate-[1.5deg] inline-block">
        <div className="w-36 h-24 bg-gradient-to-br from-sky-200 via-sky-300 to-blue-400 rounded overflow-hidden flex items-center justify-center">
          <div className="text-2xl">✈️</div>
        </div>
        <p className="font-handwriting text-navy text-xs mt-1.5 text-center">Paris → Hanoï ✦</p>
      </div>
    )
  },
  {
    num: '02', icon: <IconFork />, title: 'Carnet gastronomique',
    desc: 'Note chaque plat local : resto, ville, pays, prix et étoiles. Tes meilleures adresses, sauvegardées — et découvre celles des autres voyageurs.',
    color: 'bg-cream-dark', textColor: 'text-navy',
    visual: (
      <div className="mt-4 bg-white p-3 shadow-md rotate-[-1.5deg] inline-block">
        <div className="w-36 h-24 bg-gradient-to-br from-orange-900 via-orange-700 to-amber-800 rounded overflow-hidden flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl mb-1">🏮</div>
            <div className="flex gap-1 justify-center">
              <div className="w-5 h-8 bg-amber-900/80 rounded-t-sm" />
              <div className="w-5 h-6 bg-amber-800/80 rounded-t-sm" />
              <div className="w-5 h-8 bg-amber-900/80 rounded-t-sm" />
            </div>
          </div>
        </div>
        <p className="font-handwriting text-navy text-xs mt-1.5 text-center">le pho de Trang ★★★★★</p>
      </div>
    )
  },
  {
    num: '03', icon: <IconWallet />, title: 'Journal de dépenses',
    desc: 'Suis tes dépenses par catégorie (transport, logement, food...) et compare le coût réel entre destinations — et une fois leur voyage terminé, accède aux carnets des autres pour savoir combien ça coûte vraiment.',
    color: 'bg-white', textColor: 'text-navy',
    visual: (
      <div className="mt-4 bg-white p-3 shadow-md rotate-[-1deg] inline-block">
        <div className="w-36 h-24 bg-gradient-to-br from-emerald-100 to-teal-200 rounded overflow-hidden p-2.5 flex flex-col justify-center gap-1.5">
          {[ {l:'Logement', w:'70%'}, {l:'Transport', w:'45%'}, {l:'Food', w:'85%'} ].map((row,i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="text-[9px] text-navy/50 w-12">{row.l}</span>
              <div className="flex-1 h-2 bg-navy/10 rounded-full overflow-hidden">
                <div className="h-full bg-coral rounded-full" style={{ width: row.w }} />
              </div>
            </div>
          ))}
        </div>
        <p className="font-handwriting text-navy text-xs mt-1.5 text-center">12 jours, 480€ ✦</p>
      </div>
    )
  },
  {
    num: '04', icon: <IconMusic />, title: 'Playlist du voyage',
    desc: 'Une musique pour chaque lieu. Spotify, Apple Music, Deezer — tout est lié.',
    color: 'bg-[#2d4a6b]', textColor: 'text-white',
    visual: (
      <div className="mt-4 bg-white p-3 shadow-md rotate-[1deg] inline-block">
        <div className="w-36 h-24 bg-gradient-to-br from-violet-300 via-fuchsia-300 to-pink-300 rounded overflow-hidden flex items-center justify-center gap-1">
          {[8,14,6,18,10,16,7].map((h,i) => (
            <div key={i} className="w-1.5 bg-navy/70 rounded-full" style={{ height: `${h*3}px` }} />
          ))}
        </div>
        <p className="font-handwriting text-navy text-xs mt-1.5 text-center">la BO d'Hanoï 🎧</p>
      </div>
    )
  },
  {
    num: '05', icon: <IconMuseum />, title: 'Tracker activités, musées & sites',
    desc: 'Coups de cœur, anecdotes, trucs & astuces pour éviter les pièges à touristes.',
    color: 'bg-cream-dark', textColor: 'text-navy',
    visual: (
      <div className="mt-4 bg-white p-3 shadow-md rotate-[1deg] inline-block">
        <div className="w-36 h-24 bg-gradient-to-br from-amber-800 to-yellow-700 rounded overflow-hidden flex items-center justify-center">
          <div className="text-2xl">🗺️</div>
        </div>
      </div>
    )
  },
  {
    num: '06', icon: <IconBed />, title: "Carnet d'hébergements",
    desc: "Auberge, hôtel, chez l'habitant : note l'ambiance, l'accueil, l'anecdote.",
    color: 'bg-white', textColor: 'text-navy',
    visual: (
      <div className="mt-4 bg-white p-3 shadow-md rotate-[1.5deg] inline-block">
        <div className="w-36 h-24 bg-gradient-to-br from-stone-200 to-amber-200 rounded overflow-hidden flex items-center justify-center">
          <div className="text-2xl">🛏️</div>
        </div>
        <p className="font-handwriting text-navy text-xs mt-1.5 text-center">auberge Mai — accueil ★★★★★</p>
      </div>
    )
  },
  {
    num: '07', icon: <IconTicket />, title: 'Documents de transport',
    desc: "Tes billets, réservations, hors-ligne. L'app surligne le bon document au bon moment.",
    color: 'bg-coral', textColor: 'text-white',
    visual: (
      <div className="mt-4 bg-white p-3 shadow-md rotate-[-1.5deg] inline-block">
        <div className="w-36 h-24 bg-gradient-to-br from-slate-100 to-slate-300 rounded overflow-hidden flex flex-col items-center justify-center gap-1 p-2">
          <div className="w-full h-3 bg-navy/15 rounded-sm" />
          <div className="w-full h-3 bg-navy/15 rounded-sm" />
          <div className="w-2/3 h-3 bg-coral/40 rounded-sm" />
        </div>
        <p className="font-handwriting text-navy text-xs mt-1.5 text-center">vol HAN→CDG, dispo hors-ligne</p>
      </div>
    )
  },
  {
    num: '08', icon: <IconUsers />, title: 'Voyage commun',
    desc: 'Tu pars là-bas ? Échange tips & conseils avec ceux qui y sont allés (ou qui y vont).',
    color: 'bg-teal', textColor: 'text-white',
    visual: (
      <div className="mt-4 bg-white p-3 shadow-md rotate-[-1deg] inline-block">
        <div className="w-36 h-24 bg-gradient-to-br from-orange-300 via-amber-400 to-yellow-500 rounded overflow-hidden flex items-end justify-center pb-2">
          <div className="text-2xl">🏔️</div>
        </div>
      </div>
    )
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="section-eyebrow">Tout ce qu'un voyageur garde en tête</p>
          <h2 className="section-title mb-4">
            Huit carnets, <em className="text-coral not-italic font-serif italic">un seul</em> compagnon.
          </h2>
          <p className="section-subtitle max-w-lg">
            Chaque module est un coin de ton carnet : pour chercher, noter, comparer, écouter, retrouver — et partager.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {modules.map((mod) => (
            <div key={mod.num} className={`module-card ${mod.color} ${mod.textColor} relative`}>
              <span className={`module-number ${mod.textColor === 'text-white' ? 'text-white/20' : 'text-navy/20'}`}>{mod.num}</span>
              <div className={`module-icon ${mod.textColor === 'text-white' ? 'bg-white/20 text-white' : ''}`}>
                {mod.icon}
              </div>
              <h3 className="font-serif text-2xl font-medium mb-2">{mod.title}</h3>
              <p className={`font-sans text-sm leading-relaxed ${mod.textColor === 'text-white' ? 'text-white/80' : 'text-navy/60'}`}>{mod.desc}</p>
              {mod.visual && <div className="mt-4">{mod.visual}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
