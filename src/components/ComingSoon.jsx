import React from 'react'

const upcoming = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/><polyline points="3 6 4 7 6 5"/>
        <polyline points="3 12 4 13 6 11"/><polyline points="3 18 4 19 6 17"/>
      </svg>
    ),
    title: 'Bucket list interactive',
    desc: 'Pays, villes, expériences à cocher avec progression visuelle. Tes rêves, mais en barre de progression.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'Passeport Challenge',
    desc: 'Gamification, badges et stats : un badge par pays visité, par moyen de transport pris, par défi relevé.',
  },
]

export default function ComingSoon() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <p className="section-eyebrow">dans les prochaines escales</p>
            <h2 className="section-title">Bientôt à bord</h2>
          </div>
          <div className="md:pt-10">
            <p className="section-subtitle">
              Deux modules en route — pensés avec les voyageurs de la liste d'attente. Rejoins-la pour voter sur l'ordre de sortie.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {upcoming.map((item) => (
            <div key={item.title} className="relative border-2 border-dashed border-sand rounded-2xl p-6 bg-cream">
              {/* BIENTÔT badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-coral text-white font-sans text-xs font-semibold px-3 py-1 rounded-full tracking-wider uppercase">
                  Bientôt
                </span>
              </div>
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-navy mb-5 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl text-navy font-medium mb-2">{item.title}</h3>
              <p className="font-sans text-navy/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
