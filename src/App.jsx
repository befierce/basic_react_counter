import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15
  let [counter,setCounter] = useState(0)
  const addValue = ()=>{
    counter = counter+1;
    setCounter(counter)
  }


  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter value: {counter}</h2>
      <button 
      onClick={addValue}>Add Value</button>
      <br></br>
      <button> Remove Value</button>
    </>
  )
}

export default App
