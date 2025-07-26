# 🌟 Retro HTML Site 🌟

A nostalgic Single Page Application (SPA) built with React + Vite, styled to look like a website from the golden age of the internet (1990s). This project combines modern web development technology with authentic retro aesthetics.

## 🌐 **Live Demo**

**[🚀 Ver el sitio web en vivo](https://alvaritooko.github.io/html_web_retro/)**

*Nota: El sitio puede tardar unos minutos en estar disponible después del despliegue.*

## 🚀 Features

- **Authentic 90s Design**: Classic Windows 95/98 inspired interface
- **Interactive Terminal**: Fully functional command-line simulation
- **Blinking Text Effects**: Classic animated elements
- **Responsive Design**: Works on all modern devices
- **Retro Color Scheme**: Authentic 80s/90s color palette
- **Modern Tech Stack**: Built with React 18 and Vite
- **SPA Navigation**: Smooth single-page application experience
- **Spanish Interface**: Complete Spanish translation

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with retro themes
- **Fonts**: Google Fonts (VT323, Press Start 2P, Orbitron)
- **Development**: ESLint, React Refresh
- **Deployment**: GitHub Pages + GitHub Actions

## 📁 Project Structure

```
retro-html-site/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── README.md
│   │   └── images/
│   │       └── README.md
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── TerminalBlock.jsx
│   │   └── AboutSection.jsx
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── retro-theme.css
│   │   └── fonts.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .github/workflows/
│   └── deploy.yml
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎮 Terminal Commands

The interactive terminal supports the following commands:

- `ayuda` - Show available commands
- `acerca` - Display information about the terminal
- `limpiar` - Clear terminal output
- `fecha` - Show current date and time
- `fortuna` - Display a random fortune
- `matrix` - Show Matrix-style digital rain effect

## 🎨 Design Features

### Color Palette
- **Primary Blue**: #000080 (Windows 95 blue)
- **Accent Yellow**: #ffff00 (High contrast)
- **Gray Scale**: #c0c0c0, #808080, #404040
- **Neon Colors**: #ff0080, #8000ff, #0080ff

### Typography
- **Primary**: Courier New (monospace)
- **Display**: VT323 (retro terminal)
- **Gaming**: Press Start 2P (8-bit style)
- **Futuristic**: Orbitron (modern retro)

### Visual Effects
- Blinking text animations
- Gradient backgrounds
- 3D button effects (outset/inset borders)
- Rainbow text animations
- Box shadows and glows

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alvaritooko/html_web_retro.git
   cd html_web_retro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment

If you want to deploy manually:

1. Build the project: `npm run build`
2. The `dist/` folder contains the production files
3. Upload the contents to your web server

## 📱 Browser Compatibility

This site is designed to work on modern browsers while maintaining a retro aesthetic:

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (for authentic experience, but not recommended)

## 🎯 Development Guidelines

### Adding New Components
1. Create component file in `src/components/`
2. Import and use in `App.jsx`
3. Add corresponding styles in `retro-theme.css`

### Styling Guidelines
- Use the established color variables
- Maintain the retro aesthetic
- Test on different screen sizes
- Keep animations subtle and purposeful

### Terminal Extensions
To add new terminal commands:
1. Add command to the `commands` object in `TerminalBlock.jsx`
2. Implement the command logic
3. Update the help text

## 🌟 Retro Features Explained

### "Under Construction" Banner
A classic 90s web design element that adds authenticity to the retro experience.

### Visitor Counter
Simulates the popular visitor counters that were common on early websites.

### Browser Badges
Displays compatibility badges for classic browsers like Netscape Navigator and Internet Explorer.

### Music Player Display
Shows what's "now playing" - a common feature on personal websites of the era.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by the golden age of the internet (1990s)
- Windows 95/98 UI design patterns
- Classic web design elements and nostalgia
- The React and Vite communities

## 📞 Contact

- **Email**: webmaster@retrosite.com
- **Website**: [https://alvaritooko.github.io/html_web_retro/](https://alvaritooko.github.io/html_web_retro/)
- **GitHub**: [alvaritooko](https://github.com/alvaritooko)

---

🌟 **Made with ❤️ and lots of nostalgia!** 🌟

*Best viewed with Netscape Navigator 3.0+ at 800x600 resolution with 256 colors.* 