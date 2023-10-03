import { useState, useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { languageAtom } from '../store/store'

export const Flag = () => {
  const $languageAtom = useStore(languageAtom)
  const [state, setState] = useState($languageAtom)

  useEffect(() => {
    setState($languageAtom)
  }, [$languageAtom])

  const handleClick = () => {
    if ($languageAtom === 'espaniol') {
      languageAtom.set('portugues')
    } else if ($languageAtom === 'portugues') {
      languageAtom.set('espaniol')
    }
  }

  return (
    <>
      <figure onClick={handleClick} className="cursor-pointer">
        {$languageAtom === 'espaniol' && (
          <img
            width="25"
            height="25"
            src="/webapp/spain.png"
            alt="bandera de españa"
          />
        )}
        {$languageAtom === 'portugues' && (
          <img
            width="25"
            height="25"
            src="/webapp/portugal.png"
            alt="bandera de portugal"
          />
        )}
      </figure>    
    </>
  )
}
