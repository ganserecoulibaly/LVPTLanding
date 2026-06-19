import React from 'react'

export default function WaitlistForm() {
  const ateliers = [
    'Introduction aux cartes Revolut / American Express',
    'Programmes de fidélité hôtels',
  ]

  return (
    <section id="liste" className="bg-navy py-24 relative overflow-hidden">
      {/* Priority access badge */}
      <div className="absolute top-8 right-8 w-20 h-20 rounded-full border-2 border-coral/40 flex items-center justify-center">
        <span className="font-sans text-coral text-xs font-semibold text-center uppercase tracking-wider leading-tight">Priority<br/>Access</span>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        {/* Panel: ateliers à venir */}
        <div className="bg-cream rounded-2xl p-8">
          <div className="text-center py-4">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="font-serif text-navy text-2xl font-medium mb-2">Bientôt disponibles</h3>
            <p className="font-sans text-navy/60 text-sm mb-6 max-w-sm mx-auto">
              De nouveaux ateliers arrivent prochainement pour t'aider à voyager mieux, dépenser plus intelligemment et bien d'autres.
            </p>
            <ul className="space-y-3 text-left max-w-sm mx-auto mb-8">
              {ateliers.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-coral/50 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e8735a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="font-sans text-navy/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-1.5 font-sans text-navy/40 text-xs hover:text-coral transition-colors duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
                Je rejoins l'aventure ! ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
