import React, { useState } from 'react'

const zones = [
  'Europe de l\'Ouest',
  'Europe de l\'Est',
  'Asie du Sud-Est',
  'Asie du Nord',
  'Amériques',
  'Afrique',
  'Moyen-Orient',
  'Océanie',
]

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', telephone: '', ville: '', zone: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="liste" className="bg-navy py-24 relative overflow-hidden">
      {/* Priority access badge */}
      <div className="absolute top-8 right-8 w-20 h-20 rounded-full border-2 border-coral/40 flex items-center justify-center">
        <span className="font-sans text-coral text-xs font-semibold text-center uppercase tracking-wider leading-tight">Priority<br/>Access</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <div className="text-white">
          <p className="font-handwriting text-coral text-lg mb-3">ta place dans le carnet</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
            Rejoins la liste<br />d'attente
          </h2>
          <p className="font-sans text-white/70 text-base leading-relaxed mb-8 max-w-sm">
            Les premiers inscrits auront accès à la version beta, voteront sur les prochaines fonctionnalités et garderont un tarif fondateur.
          </p>
          <ul className="space-y-3">
            {['Accès anticipé à la beta', 'Tarif fondateur à vie', 'Vote sur la roadmap'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border border-coral/50 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e8735a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span className="font-sans text-white/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right form */}
        <div className="bg-cream rounded-2xl p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="font-serif text-navy text-2xl font-medium mb-2">Bienvenue à bord !</h3>
              <p className="font-sans text-navy/60 text-sm">Tu seras prévenu·e en avant-première à l'ouverture.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-navy/50 text-xs uppercase tracking-widest block mb-1.5">Prénom</label>
                  <input
                    type="text" name="prenom" placeholder="Marin"
                    value={form.prenom} onChange={handleChange}
                    className="w-full bg-cream-dark rounded-xl px-4 py-3 font-sans text-navy text-sm placeholder-navy/30 border-none outline-none focus:ring-2 focus:ring-coral/30"
                  />
                </div>
                <div>
                  <label className="font-sans text-navy/50 text-xs uppercase tracking-widest block mb-1.5">Nom</label>
                  <input
                    type="text" name="nom" placeholder="Dupont"
                    value={form.nom} onChange={handleChange}
                    className="w-full bg-cream-dark rounded-xl px-4 py-3 font-sans text-navy text-sm placeholder-navy/30 border-none outline-none focus:ring-2 focus:ring-coral/30"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-navy/50 text-xs uppercase tracking-widest block mb-1.5">Email</label>
                  <input
                    type="email" name="email" placeholder="marin@exemple.com"
                    value={form.email} onChange={handleChange} required
                    className="w-full bg-cream-dark rounded-xl px-4 py-3 font-sans text-navy text-sm placeholder-navy/30 border-none outline-none focus:ring-2 focus:ring-coral/30"
                  />
                </div>
                <div>
                  <label className="font-sans text-navy/50 text-xs uppercase tracking-widest block mb-1.5">Téléphone</label>
                  <input
                    type="tel" name="telephone" placeholder="+33 6 12 34 56 78"
                    value={form.telephone} onChange={handleChange}
                    className="w-full bg-cream-dark rounded-xl px-4 py-3 font-sans text-navy text-sm placeholder-navy/30 border-none outline-none focus:ring-2 focus:ring-coral/30"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-navy/50 text-xs uppercase tracking-widest block mb-1.5">Ville de départ</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-coral/60">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    <input
                      type="text" name="ville" placeholder="Paris"
                      value={form.ville} onChange={handleChange}
                      className="w-full bg-cream-dark rounded-xl pl-9 pr-4 py-3 font-sans text-navy text-sm placeholder-navy/30 border-none outline-none focus:ring-2 focus:ring-coral/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-navy/50 text-xs uppercase tracking-widest block mb-1.5">Zone géographique souhaitée</label>
                  <select
                    name="zone" value={form.zone} onChange={handleChange}
                    className="w-full bg-cream-dark rounded-xl px-4 py-3 font-sans text-navy text-sm border-none outline-none focus:ring-2 focus:ring-coral/30 appearance-none cursor-pointer"
                  >
                    <option value="">Choisis une zone</option>
                    {zones.map(z => <option key={z} value={z}>{z}</option>)}
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-coral-light hover:bg-coral text-white font-sans font-medium py-4 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 mt-2">
                Réserver ma place
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
              <p className="font-sans text-navy/40 text-xs text-center">
                On ne partagera jamais tes infos. Tu peux te désinscrire à tout moment.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
