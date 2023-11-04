import { useState, useEffect } from 'react'
import { CardJSX } from './cardJSX'

export const CardsJSX = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Realizar la solicitud a la API usando fetch
    fetch('https://mercado.webapp.ar/api/')
      .then((response) => response.json())
      .then((data) => {
        const valorObtenido = data
        setData(valorObtenido)        
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <>
      {data &&
        data.map((item, index) => (
          <CardJSX
            key={index}
            title={item.titulo}
            description={item.descripcion}
            image={item.imagen}
            price={item.precio}
          />
        ))}
    </>
  )
}
