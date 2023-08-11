import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { themeAtom } from '../store/store'

export const GradientTitle = ({ withColor, withoutColor }) => {
  const $themeAtom = useStore(themeAtom)
  useEffect(() => {
    if ($themeAtom === 'dark') console.log($themeAtom)
  }, [$themeAtom])

  return (
    <h1 className="ml-2 mb-4 text-2xl font-extrabold gray-400 md:text-3xl lg:text-4xl">
      {$themeAtom !== 'dark' && (
        <span className="text-transparent bg-clip-text bg-gradient-to-l to-neutral from-primary">
          {withColor}
        </span>
      )}
      {$themeAtom === 'dark' && <span> {withColor} </span>}
      {withoutColor}
    </h1>
  )
}
