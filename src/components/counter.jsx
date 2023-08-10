import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '@nanostores/react'
import { counter } from '../store/store'

export const Counter = () => {
  const miElementoRef = useRef(null)
  const [color, setColor] = useState(undefined)
  const $counter = useStore(counter)

  let add = () => {
    counter.set(parseInt($counter) + 1)
  }

  let subtract = () => {
    counter.set(parseInt($counter) - 1)
  }

  useEffect(() => {
    const miElemento = miElementoRef.current
    const estilosComputados = window.getComputedStyle(miElemento)
    const colorDelTexto = estilosComputados.color
    // Obtener los componentes R, G y B del color en formato RGB
    const rgbComponents = colorDelTexto.match(/\d+/g)

    // Convertir los componentes a formato hexadecimal
    const colorHex = rgbComponents
      .map((component) => parseInt(component).toString(16).padStart(2, '0'))
      .join('') // Esto mostrará el valor del color en formato RGB, por ejemplo "rgb(59, 130, 246)"
    setColor('#' + colorHex)
    console.log('#' + colorHex)
  }, [])

  return (
    <>
      <div ref={miElementoRef} className="text-accent">
        <div className=" flex justify-stretch">
          <div className="stat bg-base-200 w-28 h-32">
            <div className="stat-title">Counter:</div>
            <div className="stat-value">{$counter}</div>
          </div>
          <div className="flex flex-col">
          <button className="btn btn-lg text-4xl btn-primary stat-value" onClick={subtract}>
            -
          </button>
          <button className="btn btn-lg text-4xl btn-primary" onClick={add}>
            +
          </button>
          </div>
        </div>
      </div>
    </>
  )
}
