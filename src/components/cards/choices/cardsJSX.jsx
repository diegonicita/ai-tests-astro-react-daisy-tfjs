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
      <ul className="steps mt-4">
        <li data-content="1" className="step step-info"></li>
        <li data-content="11" className="step"></li>
        <li  data-content="21" className="step"></li>
        <li  data-content="31"className="step"></li>
        <li  data-content="41"className="step"></li>
        <li  data-content="51"className="step"></li>
        <li  data-content="61"className="step"></li>
        <li  data-content="71"className="step"></li>
        <li  data-content="81"className="step"></li>
        <li  data-content="91"className="step"></li>
      </ul>
      {data &&
        data.map((item, index) => (
          <CardJSX
            key={index}
            title={'Pregunta N°' + item.numero}
            description={item.texto}
            image={item.imagen}
            year={item.ano}
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
