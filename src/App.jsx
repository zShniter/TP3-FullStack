import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bienvenue from './components/Bienvenue'
import Compteur from './components/Compteur'
import TodoApp from './components/TodoApp'
import Formulaire from './components/Formulaire'
import ListeDynamique from './components/ListeDynamique'
function App() {
  

  return (
    <>
      <div className="App">
        <Bienvenue nom="Ali Chniter" />
        
        <Compteur />

        <Formulaire />
        <ListeDynamique />

        <TodoApp />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
