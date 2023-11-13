import {
  obtenerPosicionEnSemana,
  obtenerDiasEnMes,
  agregarDiasAlPrincipioDelMes,
} from './helper'
import { useState, useEffect } from 'react'

type Data = {
  day: number
  status: boolean
}

const useDate = () => {
  const currentDate = new Date() // Obtiene la fecha actual
  const currentMonth = currentDate.getMonth() + 1 // El mes es devuelto en base 0 (0-11), por lo que sumamos 1
  const currentYear = currentDate.getFullYear() // Obtiene el año actual
  const [monthState, setMonthState] = useState<number>(currentMonth)
  const [yearState, setYearState] = useState<number>(currentYear)
  const [arrayMesActual, setArrayMesActual] = useState<Data[] | null>([])

  const handleChangeMonth = (month: number) => {
    setMonthState(month)
  }

  const handleChangeYear = (year: number) => {
    setYearState(year)
  }

  useEffect(() => {
    const posicionDiaIniciodeMes = obtenerPosicionEnSemana(
      1,
      monthState,
      yearState,
    )
    const mesActual = obtenerDiasEnMes(monthState, yearState)
    let diasMesPrevio = 0
    if (monthState > 1)
      diasMesPrevio = obtenerDiasEnMes(monthState - 1, yearState)
    if (monthState === 1) diasMesPrevio = obtenerDiasEnMes(12, yearState - 1)
    const result = agregarDiasAlPrincipioDelMes(
      posicionDiaIniciodeMes,
      diasMesPrevio,
      mesActual,
    )

    setArrayMesActual(result)
  }, [monthState, yearState])

  return {
    monthState,
    yearState,
    arrayMesActual,
    handleChangeMonth,
    handleChangeYear,
  }
}

export default useDate
