import { useState, useEffect } from 'react'
import { CardJSX } from './cardJSX'

export const CardsJSX = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Realizar la solicitud a la API usando fetch
    fetch('https://mercado.webapp.ar/api/preguntas/0')
      .then((response) => response.json())
      .then((data) => {
        const valorObtenido = []
        valorObtenido.push(data)
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
            title={"Pregunta: " + item.numero}
            description={item.texto}
            image={item.imagen}
            price={item.ano}
            opcion1={item.opcion1}
            opcion2={item.opcion2}
            opcion3={item.opcion3}
            opcion4={item.opcion4}
            opcion5={item.opcion5}
          />
        ))}
    </>
  )
}
