import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userName, setUsername] = useState('xxx');
  const [color, setColor] = useState('white');

  return (
    <>
      <h1 style={{color: color}}>
        Hello {userName}!
      </h1>
      <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" value={userName} onChange={e => setUsername(e.target.value) } 
        style={{color: color}}/>
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" value={color} onChange={e => setColor(e.target.value) } />
      </div>
    </>
  )
}

export default App
