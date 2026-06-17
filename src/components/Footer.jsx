import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-coral flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                </svg>
              </div>
              <span className="font-serif text-white font-medium">Le Voyage Pour Tous</span>
            </div>
            <p className="font-handwriting text-coral text-2xl leading-tight">
              Le carnet qui voyage <em className="not-italic text-coral">avec</em><br />toi.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-white/40 text-xs uppercase tracking-widest mb-5">Explorer</p>
            <ul className="space-y-3">
              {['Services', 'Comment ça marche', 'Communauté', "Liste d'attente"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-white/70 hover:text-coral transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-white/40 text-xs uppercase tracking-widest mb-5">Restons en contact</p>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-coral transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-coral transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                </svg>
              </a>
            </div>
            <p className="font-sans text-white/30 text-xs">
              Construit avec 🧡 et beaucoup de tampons de passeport.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-white/30 text-xs">© 2026 Le Voyage Pour Tous</p>
          <p className="font-handwriting text-white/30 text-sm">✦ Bon voyage</p>
        </div>
      </div>
    </footer>
  )
}
