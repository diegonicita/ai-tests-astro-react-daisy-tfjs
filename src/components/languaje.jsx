import { useStore } from '@nanostores/react'
import { languageAtom } from '../store/store'
import { useEffect } from 'react'

export const Language = ({ esp, por }) => {
  const $languageAtom = useStore(languageAtom)  
  return (
    <div> {$languageAtom === 'espaniol' ? esp : por} </div>
  )
}