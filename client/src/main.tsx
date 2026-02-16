import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return <div style={{ fontSize: '3rem', textAlign: 'center', padding: '50px' }}>
    Hello from Render! Работает 💪
  </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)