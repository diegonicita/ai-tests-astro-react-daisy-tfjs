export const obtenerPosicionEnSemana = (
  dia: number,
  mes: number,
  año: number,
) => {
  const primerDiaDelMes = new Date(año, mes - 1, dia)
  // Sunday = 0 y Saturday : 6
  let diaDeLaSemana = primerDiaDelMes.getDay()
  // Ajustar el valor para que 1 sea lunes y 7 sea domingo
  // diaDeLaSemana = diaDeLaSemana === 0 ? 7 : diaDeLaSemana
  // Ajustar el valor para que 1 sea Domingo y 7 sea Sabado
  diaDeLaSemana = diaDeLaSemana === 0 ? 1 : diaDeLaSemana + 1
  return diaDeLaSemana
}

export const obtenerDiasEnMes = (mes: number, año: number) => {
  // El mes en JavaScript se numera de 0 a 11, por lo que se resta 1 al mes ingresado
  const diasEnMes = new Date(año, mes, 0).getDate()
  return diasEnMes
}

export function agregarDiasAlPrincipioDelMes(
  posicionEnLaSemanaDelPrimerDiaDelMes: number,
  cantidadDeDiasDelMesPrevio: number,
  mesActual: number,
) {
  const days = []

  for (let i = 0; i < mesActual; i++) days.push({ day: i + 1, status: true })
  for (let i = 1; i < 8; i++) days.push({ day: i, status: false })

  if (
    posicionEnLaSemanaDelPrimerDiaDelMes < 1 ||
    posicionEnLaSemanaDelPrimerDiaDelMes > 7 ||
    cantidadDeDiasDelMesPrevio < 1 ||
    cantidadDeDiasDelMesPrevio > 31
  ) {
    return null
  }

  // Encuentra cuántos días adicionales agregar
  const diasAgregados = posicionEnLaSemanaDelPrimerDiaDelMes

  // Agrega los días al principio del array
  for (let i = 0; i < diasAgregados - 1; i++) {
    days.unshift({ day: cantidadDeDiasDelMesPrevio - i, status: false })
  }

  return days
}
