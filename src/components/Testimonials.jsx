import React from 'react'

const testimonials = [
  {
    quote: "J'ai enfin un endroit pour retrouver le nom du petit izakaya où j'ai mangé les meilleures gyozas de ma vie.",
    name: 'Léa, 28 ans',
    route: 'LYON → KYOTO',
  },
  {
    quote: "Comparer ce que j'ai vraiment dépensé vs ce que les blogs annonçaient, ça change la prépa du voyage suivant.",
    name: 'Karim, 34 ans',
    route: 'MARSEILLE → BUENOS AIRES',
  },
  {
    quote: "La playlist liée au voyage, c'est génial. Un morceau et hop, t'es de retour sur la plage de Costa Nova.",
    name: 'Anouk & Tim',
    route: 'BRUXELLES → LISBONNE',
  },
]

const StampIcon = () => (
  <div className="w-12 h-12 rounded-xl border-2 border-navy/20 flex items-center justify-center flex-shrink-0">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e2d3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
      <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
      <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
      <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
      <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
      <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
      <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/>
      <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
    </svg>
  </div>
)

export default function Testimonials() {
  return (
    <section id="communaute" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-eyebrow font-handwriting">cartes postales reçues</p>
        <h2 className="section-title mb-4">La communauté en parle</h2>
        <p className="section-subtitle mb-14 max-w-md">
          Quelques mots des voyageurs déjà inscrits sur la liste d'attente.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-cream-dark rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 mb-6">
                <p className="font-handwriting text-navy text-lg leading-relaxed">
                  « {t.quote} »
                </p>
                <StampIcon />
              </div>
              <div>
                <div className="border-t border-dashed border-navy/20 mb-4" />
                <p className="font-serif text-navy font-medium">{t.name}</p>
                <p className="font-sans text-navy/40 text-xs uppercase tracking-widest mt-1">{t.route}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
