import React from 'react'

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1 className="about-title">
          <span className="blink">ℹ️</span> Acerca de este sitio <span className="blink">ℹ️</span>
        </h1>
        <div className="about-decoration">
          <span>═══════════════════════════════════════════════════════════════</span>
        </div>
      </div>
      
      <div className="about-content">
        <div className="about-box">
          <h2>🎯 Misión</h2>
          <p>
            ¡Bienvenido a mi sitio web retro! Este sitio es un tributo a la época dorada de Internet: los años 90, cuando la web era joven, salvaje y llena de posibilidades. ¡Construido con tecnología moderna (React) pero con el estilo de 1995!
          </p>
        </div>
        
        <div className="about-box">
          <h2>🛠️ Tecnologías</h2>
          <div className="tech-list">
            <div className="tech-item">
              <span className="tech-icon">⚛️</span>
              <span className="tech-name">React 18</span>
              <span className="tech-desc">Librería de componentes moderna</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">⚡</span>
              <span className="tech-name">Vite</span>
              <span className="tech-desc">Herramienta de construcción rápida</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🎨</span>
              <span className="tech-name">CSS3</span>
              <span className="tech-desc">Estilos retro</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">📱</span>
              <span className="tech-name">Responsive</span>
              <span className="tech-desc">Funciona en todos los dispositivos</span>
            </div>
          </div>
        </div>
        
        <div className="about-box">
          <h2>🌟 Características</h2>
          <ul className="features-list">
            <li>🎨 Esquema de colores y tipografía auténticos de los 90s</li>
            <li>✨ Efectos de texto parpadeante y animaciones</li>
            <li>💻 Simulación de terminal interactiva</li>
            <li>📱 Diseño responsive para dispositivos modernos</li>
            <li>🎵 Visualización de música retro</li>
            <li>🚧 Banners de "En construcción"</li>
            <li>📊 Contador de visitas (simulado)</li>
            <li>🔗 Menú de navegación clásico</li>
          </ul>
        </div>
        
        <div className="about-box">
          <h2>📅 Línea de tiempo</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">1995</span>
              <span className="timeline-event">Nace la web (en espíritu)</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2024</span>
              <span className="timeline-event">Se crea este sitio</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">Futuro</span>
              <span className="timeline-event">¡Más funciones retro próximamente!</span>
            </div>
          </div>
        </div>
        
        <div className="about-box">
          <h2>📞 Información de contacto</h2>
          <div className="contact-info">
            <p><span className="contact-label">📧 Correo:</span> alvaritooko@gmail.com</p>
            <p><span className="contact-label">📞 Teléfono:</span> 1-800-RETRO-90</p>
            <p><span className="contact-label">🏠 Ubicación:</span> Ciberespacio, Internet</p>
            <p><span className="contact-label">⏰ Zona horaria:</span> GMT (Hora de Greenwich)</p>
          </div>
        </div>
      </div>
      
      <div className="about-footer">
        <p className="signature">
          <span className="blink">🌟</span> ¡Gracias por visitar! <span className="blink">🌟</span>
        </p>
        <p className="disclaimer">
          Este sitio se visualiza mejor con Netscape Navigator 3.0 o Internet Explorer 4.0+ 
          a 800x600 de resolución y 256 colores.
        </p>
      </div>
    </div>
  )
}

export default AboutSection 