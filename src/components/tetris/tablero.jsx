import { useEffect, useState } from 'react'

export const Tablero = ({ x, y }) => {
    
  const [turno, setTurno] = useState(0)
  const [tablero, setTablero] = useState()
  const [ganador, setGanador] = useState(false)
 
  useEffect(() => {

    const llenar = () => {
      const data = Array(x).fill(Array(y).fill(0))
      setTablero(data)      
    }

    llenar()
  }, [])

  return (
    tablero &&
    tablero.map((fila, i) => (
      <div key={i}>        
        {fila}-{i}
      </div>
    ))
  )
}
