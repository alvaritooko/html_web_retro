import React, { useState, useEffect } from 'react'

function TerminalBlock() {
  const [terminalOutput, setTerminalOutput] = useState([])
  const [currentCommand, setCurrentCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const commands = {
    ayuda: 'Comandos disponibles: ayuda, acerca, limpiar, fecha, fortuna, matrix',
    acerca: 'Esto es una simulación de terminal retro. ¡Bienvenido a los 90s!',
    limpiar: () => setTerminalOutput([]),
    fecha: () => new Date().toLocaleString('es-ES'),
    fortuna: () => {
      const fortunes = [
        'Un bug en la mano es mejor que uno por encontrar.',
        'Pronto te visitará un viejo amigo.',
        'La mejor forma de predecir el futuro es implementarlo.',
        'Recibirás un paquete extraño por correo.',
        'Un escritorio limpio es señal de un cajón desordenado.',
        'El pájaro madrugador atrapa el gusano, pero el segundo ratón se lleva el queso.'
      ]
      return fortunes[Math.floor(Math.random() * fortunes.length)]
    },
    matrix: () => {
      const matrixChars = '01'
      let result = ''
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 50; j++) {
          result += matrixChars[Math.floor(Math.random() * matrixChars.length)]
        }
        result += '\n'
      }
      return result
    }
  }

  const executeCommand = (cmd) => {
    const command = cmd.toLowerCase().trim()
    let output = ''

    if (commands[command]) {
      if (typeof commands[command] === 'function') {
        output = commands[command]()
      } else {
        output = commands[command]
      }
    } else if (command) {
      output = `Comando no encontrado: ${cmd}. Escribe 'ayuda' para ver los comandos disponibles.`
    }

    return output
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!currentCommand.trim()) return

    const newOutput = [
      ...terminalOutput,
      { type: 'input', content: `$ ${currentCommand}` },
      { type: 'output', content: executeCommand(currentCommand) }
    ]

    setTerminalOutput(newOutput)
    setCommandHistory([...commandHistory, currentCommand])
    setCurrentCommand('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentCommand('')
      }
    }
  }

  useEffect(() => {
    setTerminalOutput([
      { type: 'output', content: 'Bienvenido a Terminal Retro v1.0' },
      { type: 'output', content: 'Escribe "ayuda" para ver los comandos disponibles.' },
      { type: 'output', content: '' }
    ])
  }, [])

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="terminal-title">💻 Terminal Retro v1.0</span>
        <div className="terminal-controls">
          <span className="control-btn">🗕</span>
          <span className="control-btn">🗖</span>
          <span className="control-btn">✕</span>
        </div>
      </div>
      
      <div className="terminal-body">
        <div className="terminal-output">
          {terminalOutput.map((line, index) => (
            <div key={index} className={`terminal-line ${line.type}`}>
              {line.content}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="terminal-input-form">
          <span className="prompt">$</span>
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            placeholder="Escribe un comando..."
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}

export default TerminalBlock 