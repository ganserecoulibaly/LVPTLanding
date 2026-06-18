import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-coral flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
            </svg>
          </div>
          <span className="font-serif text-navy font-medium text-lg">Le Voyage Pour Tous</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="font-sans text-navy/70 hover:text-coral transition-colors text-sm">Services</a>
          <a href="#comment" className="font-sans text-navy/70 hover:text-coral transition-colors text-sm">Comment ça marche</a>
          <a href="#communaute" className="font-sans text-navy/70 hover:text-coral transition-colors text-sm">Communauté</a>
        </div>

        <a href="#recherche" className="btn-primary text-sm py-2.5 px-5">
          Rejoindre l'aventure
        </a>
      </div>
    </nav>
  )
}
