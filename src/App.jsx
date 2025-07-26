import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import TerminalBlock from './components/TerminalBlock.jsx'
import AboutSection from './components/AboutSection.jsx'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="app">
      <Header onNavigate={setCurrentSection} currentSection={currentSection} />
      
      <main className="main-content">
        {currentSection === 'home' && (
          <div className="home-section">
            <div className="welcome-banner">
              <h1 className="main-title">
                <span className="blink">🌟</span> ¡Bienvenido a mi sitio web retro! <span className="blink">🌟</span>
              </h1>
              <p className="subtitle">¡Construido con el espíritu de los 90s, impulsado por tecnología moderna!</p>
            </div>
            
            <div className="content-grid">
              <div className="content-box">
                <h2>🚀 Últimas novedades</h2>
                <ul>
                  <li>✨ Menú de navegación retro añadido</li>
                  <li>🎨 Esquema de colores auténtico de los 90s</li>
                  <li>💾 Componentes estilo terminal</li>
                  <li>🌟 Efectos de texto parpadeante</li>
                </ul>
              </div>
              
              <div className="content-box">
                <h2>📅 Contador de visitas</h2>
                <div className="visitor-counter">
                  <span className="counter-number">000,001</span>
                  <p>¡visitas desde 1995!</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {currentSection === 'about' && <AboutSection />}
        
        {currentSection === 'terminal' && <TerminalBlock />}
      </main>
      
      <Footer />
    </div>
  )
}

export default App 