import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-decoration">
          <div className="decoration-line">═══════════════════════════════════════════════════════════════</div>
        </div>
        
        <div className="footer-info">
          <div className="footer-section">
            <h3>🔗 Enlaces rápidos</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">📧 Envíame un correo</a></li>
              <li><a href="#" className="footer-link">📞 Contacto</a></li>
              <li><a href="#" className="footer-link">📖 Libro de visitas</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>🌟 Información del sitio</h3>
            <p>Mejor visualizado con Netscape Navigator 3.0+</p>
            <p>Resolución de pantalla: 800x600 o superior</p>
            <p>Última actualización: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="footer-section">
            <h3>🎵 Sonando ahora</h3>
            <div className="music-player">
              <span className="music-note">♪</span>
              <span className="song-title">Midnight City - M83</span>
              <span className="music-note">♪</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Sitio Retro. Todos los derechos reservados. 
            <span className="blink"> ¡Hecho por Alvaro Congost ❤️ !</span>
          </p>
          <div className="browser-badges">
            <span className="browser-badge">🌐 Compatible con IE</span>
            <span className="browser-badge">🦊 Listo para Firefox</span>
            <span className="browser-badge">🌊 Aprobado por Netscape</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 