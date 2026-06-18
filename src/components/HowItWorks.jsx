import React from 'react'

const steps = [
  {
    num: '01',
    title: "Embarquer dans l'aventure",
    desc: 'Quelques infos sur toi et tes envies de voyage, pour qu\'on configure ton carnet aux petits oignons.',
  },
  {
    num: '02',
    title: 'Bienvenue à bord',
    desc: "On t'envoie nos pépites et inspirations directement par mail en attendant le grand lancement.",
  },
  {
    num: '03',
    title: 'Note, partage, repars',
    desc: "Plats, dépenses, hébergements, anecdotes — et échange avec d\'autres voyageurs sur leur expérience, dès le grand lancement de l'application !",
  },
]

export default function HowItWorks() {
  return (
    <section id="comment" className="bg-cream-dark py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-eyebrow">l'itinéraire</p>
        <h2 className="section-title mb-16">Comment ça marche</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-20 h-20 rounded-full border-2 border-navy/30 flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-navy/50 text-lg">{step.num}</span>
              </div>
              <h3 className="font-serif text-xl text-navy font-medium mb-3">{step.title}</h3>
              <p className="font-sans text-navy/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
