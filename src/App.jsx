import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const add = () =>setCount(count + 1);
  const remove = () =>setCount(count - 1);

  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={remove} disabled = {count ===0}>remove</button>
      <button onClick={add}>add</button>
      
    </>
  )
}

export default App
