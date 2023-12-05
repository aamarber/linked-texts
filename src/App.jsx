import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userName, setUsername] = useState('')

  return (
    <>
      <h1>
        Hello {userName}!
      </h1>
      <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" value={userName} onChange={e => setUsername(e.target.value) } />
      </div>
    </>
  )
}

export default App
