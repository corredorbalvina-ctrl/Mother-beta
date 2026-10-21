import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Button from './Components/Button'



function App() {
const [contador, setContador] = useState(0)

const IncrementarContador = () => setContador(contador + 1)
const DecrementarContador = () => setContador(contador - 1)
  return (
    <>
     <h1 className='text-5xl'>Acumulador: {contador}</h1>
     <Button text="Aumentar" funcionalidad={IncrementarContador}/>
     <Button text="Disminuir" funcionalidad={DecrementarContador}/>
    </>
  )
}

export default App
