import { useState, useEffect } from 'react'
import { CardJSX } from './cardJSX'

export const CardsJSX = ({ limit, year, id, desde }) => {
  const [data, setData] = useState(null)  

  useEffect(() => {
    // Realizar la solicitud a la API usando fetch
    fetch(
      'https://mercado.webapp.ar/api/examen/?limite=' +
        limit +
        '&ano=' +
        year +
        '&examen=' +
        id +
        '&desde=' +
        desde,
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data)
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
            title={'Pregunta N°' + item.numero}
            description={item.texto}
            image={item.imagen}
            year={item.ano}
            correct={item.correcta}
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
