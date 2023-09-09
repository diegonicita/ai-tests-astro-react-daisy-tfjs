import { useState, useEffect } from 'react'
import { Question } from './question'

export const Page = ({ limit, year, id, desde }) => {
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
          <Question
            key={index}
            title={'Pregunta N°' + item.numero}
            questionNumber={item.numero}
            description={item.texto}
            image={item.imagen}
            year={item.ano}
            correct={item.correcta}
            options={[item.opcion1, item.opcion2, item.opcion3, item.opcion4, item.opcion5]}            
          />
        ))}
    </>
  )
}
