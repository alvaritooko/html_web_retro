import React from 'react'

function Header({ onNavigate, currentSection }) {
  const menuItems = [
    { id: 'home', label: '🏠 Inicio', icon: '🏠' },
    { id: 'about', label: 'ℹ️ Acerca de', icon: 'ℹ️' },
    { id: 'terminal', label: '💻 Terminal', icon: '💻' }
  ]

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="site-logo">
            <span className="logo-text">🌟 SITIO RETRO 🌟</span>
          </h1>
          <div className="construction-banner">
            <span className="construction-text">🚧 EN CONSTRUCCIÓN 🚧</span>
          </div>
        </div>
        
        <nav className="navigation">
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-button ${currentSection === item.id ? 'active' : ''}`}
                  onClick={() => onNavigate(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="header-decoration">
          <div className="decoration-line">═══════════════════════════════════════════════════════════════</div>
        </div>
      </div>
    </header>
  )
}

export default Header 