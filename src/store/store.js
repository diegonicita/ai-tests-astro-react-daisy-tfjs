import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export const counter = persistentAtom('counter', 0, {
  encode: JSON.stringify,
  decode: JSON.parse,
})

export const themeAtom = persistentAtom('themeAtom', '', {
  encode: JSON.stringify,
  decode: JSON.parse,
})

export const fontAtom = persistentAtom('fontAtom', '', {
  encode: JSON.stringify,
  decode: JSON.parse,
})

export const languageAtom = persistentAtom('languageAtom', '', {
  encode: JSON.stringify,
  decode: JSON.parse,
})
