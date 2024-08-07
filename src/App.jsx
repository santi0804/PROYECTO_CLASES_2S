import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PROYECTO INICIAL</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          select {count}
        </button>

      </div>
      <p className="read-the-docs">
        Proyecto parqueaderos y visitantes
      </p>
    </>
  )
}

export default App
