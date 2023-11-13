import { expect, test } from 'vitest'
import {
  obtenerDiasEnMes,
  obtenerPosicionEnSemana,
  agregarDiasAlPrincipioDelMes,  
} from './helper'

test('Dias de Enero 2023', () => {
  expect(obtenerDiasEnMes(1, 2023)).toBe(31)
  expect(obtenerDiasEnMes(2, 2023)).toBe(28)
})

test('Posicion en la semana', () => {
  // La posicion en la semana va de 0 = lunes a 7 = domingo
  expect(obtenerPosicionEnSemana(1, 10, 2023)).toBe(1)
  expect(obtenerPosicionEnSemana(31, 12, 2023)).toBe(1)
})

test('Agregar dias al principio del Mes', () => {
  const posicionEnLaSemanaDelPrimerDiaDelMes = 4
  const cantidadDeDiasDelMesPrevio = 31
  const p = posicionEnLaSemanaDelPrimerDiaDelMes
  const c = cantidadDeDiasDelMesPrevio
  const mes = 11 // noviembre
  expect(agregarDiasAlPrincipioDelMes(p, c, mes)?.slice(0, 3)).toEqual([
    { day: 29, status: false },
    { day: 30, status: false },
    { day: 31, status: false },
  ])
})
