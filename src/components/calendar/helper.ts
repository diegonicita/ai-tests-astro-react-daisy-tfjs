import React from 'react'

export const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo',
]

export const months = [
  { mes: 'Enero', numero: 1 },
  { mes: 'Febrero', numero: 2 },
  { mes: 'Marzo', numero: 3 },
  { mes: 'Abril', numero: 4 },
  { mes: 'Mayo', numero: 5 },
  { mes: 'Mayo', numero: 5 },
  { mes: 'Junio', numero: 6 },
  { mes: 'Julio', numero: 7 },
  { mes: 'Agosto', numero: 8 },
  { mes: 'Septiembre', numero: 9 },
  { mes: 'Octubre', numero: 10 },
  { mes: 'Noviembre', numero: 11 },
  { mes: 'Diciembre', numero: 12 },
]

export const years = ['2023', '2024']

function obtenerDiaInicioMes(dia: number, mes: number, año: number) {
  const primerDiaDelMes = new Date(año, mes, dia)
  let diaDeLaSemana = primerDiaDelMes.getDay()
  // Ajustar el valor para que 1 sea lunes y 7 sea domingo
  diaDeLaSemana = diaDeLaSemana === 0 ? 7 : diaDeLaSemana
  return diaDeLaSemana
}

export function obtenerDiasEnMes(mes: number, año: number) {
  // El mes en JavaScript se numera de 0 a 11, por lo que se resta 1 al mes ingresado
  const diasEnMes = new Date(año, mes, 0).getDate()
  return diasEnMes
}

export function agregarDiasAlPrincipio(
  numeroDiaSemana: number,
  diaFinalMes: number,
  mesActual: number,
) {
  const days = []

  for (let i = 0; i < mesActual; i++) days.push({ day: i + 1, status: true })
  for (let i = 1; i < 8; i++) days.push({ day: i, status: false })

  if (
    numeroDiaSemana < 1 ||
    numeroDiaSemana > 7 ||
    diaFinalMes < 1 ||
    diaFinalMes > 31
  ) {
    return null
  }

  // Encuentra cuántos días adicionales agregar
  const diasAgregados = numeroDiaSemana

  // Agrega los días al principio del array
  for (let i = 0; i < diasAgregados - 1; i++) {
    days.unshift({ day: diaFinalMes - i, status: false })
  }

  return days
}

export function verificarDisponibilidad(
  dia: number,
  mes: number,
  año: number,
  inicioCita: string | number | Date,
) {
  const fecha = new Date(año, mes - 1, dia)
  const startTime = new Date(inicioCita)

  const mismoDiaMesHora =
    fecha.getDate() === startTime.getDate() &&
    fecha.getMonth() === startTime.getMonth() &&
    fecha.getFullYear() === startTime.getFullYear()

  return mismoDiaMesHora
}

export function verificarDisponibilidadHorario(
  dia: number,
  mes: number,
  año: number,
  inicioCita: string | number | Date,
  horas: number,
  minutos: number,
) {
  const fecha = new Date(año, mes - 1, dia, horas, minutos)
  const _inicioCita = new Date(inicioCita)
  const mismoDiaMesHoraMinutos =
    fecha.getDate() === _inicioCita.getDate() &&
    fecha.getMonth() === _inicioCita.getMonth() &&
    fecha.getFullYear() === _inicioCita.getFullYear() &&
    fecha.getHours() === _inicioCita.getHours() &&
    fecha.getMinutes() === _inicioCita.getMinutes()

  return mismoDiaMesHoraMinutos
}

export function getHorario(inicioCita: string | number | Date) {
  const startTime = new Date(inicioCita)
  const horas = startTime.getHours().toString().padStart(2, '0')
  const minutos = startTime.getMinutes().toString().padStart(2, '0')
  return horas + ':' + minutos
}

export const scrollToSection = (
  elementRef: React.RefObject<HTMLDivElement>,
): void => {
  setTimeout(
    () =>
      window.scrollTo({
        top: elementRef.current!.offsetTop,
        behavior: 'smooth',
      }),
    100,
  )
}

export function verificarCitasEnHorarios(
  data: any,
  dia: number | null,
  mes: number,
  año: number,
) {
  // Horarios a verificar
  const horarios = [
    { hora: 8, minuto: 0 },
    { hora: 8, minuto: 30 },
    { hora: 9, minuto: 0 },
    { hora: 9, minuto: 30 },
    { hora: 10, minuto: 0 },
    { hora: 10, minuto: 30 },
    { hora: 11, minuto: 0 },
    { hora: 11, minuto: 30 },
    { hora: 12, minuto: 0 },
    { hora: 12, minuto: 30 },
    { hora: 17, minuto: 0 },
    { hora: 17, minuto: 30 },
    { hora: 18, minuto: 0 },
    { hora: 18, minuto: 30 },
    { hora: 19, minuto: 0 },
    { hora: 19, minuto: 30 },
    { hora: 20, minuto: 0 },
    { hora: 20, minuto: 30 },
    { hora: 21, minuto: 0 },
    { hora: 21, minuto: 30 },
  ]

  const array = []

  const dataEspecifica = data.filter(
    (m: any) => m.dia === dia && m.mes === mes && m.año === año,
  )

  for (const item of horarios) {
    let count = 0

    for (const cita of dataEspecifica) {
      if (
        cita.hora === item.hora &&
        cita.minuto === item.minuto &&
        cita.mes === mes &&
        cita.año === año &&
        cita.dia === dia &&
        cita.isActive === true
      ) {
        array.push({
          hora: cita.hora,
          minuto: cita.minuto,
          existe: true,
          isActive: true,
        })
        count++
      }
    }
    if (count === 0) {
      array.push({
        hora: item.hora,
        minuto: item.minuto,
        existe: false,
        isActive: true,
      })
    }
    count = 0
  }

  return array
}

export function sumarMediaHora(fecha: string) {
  // Crear un objeto de fecha a partir de la cadena de fecha de entrada
  const fechaObjeto = new Date(fecha)

  // Sumar 30 minutos a la fecha
  fechaObjeto.setMinutes(fechaObjeto.getMinutes() + 30)

  // Formatear la nueva fecha como una cadena en el mismo formato de entrada
  const nuevaFechaFormateada = fechaObjeto.toISOString()

  return nuevaFechaFormateada
}

export function formatAppointment(
  yearState: number,
  monthState: number,
  dateFilter: null | number,
  horarioSelected: string,
  horarioSelectedPlus30: { current: number },
  vetId: null | string,
) {
  const date =
    yearState.toString() +
    '-' +
    monthState.toString().padStart(2, '0') +
    '-' +
    dateFilter?.toString().padStart(2, '0') // Fecha de la cita '2023-10-21'

  // eslint-disable-next-line camelcase
  const end_time =
    horarioSelectedPlus30.current === 30
      ? date +
        'T' +
        horarioSelected.slice(0, 2) +
        ':' +
        horarioSelectedPlus30.current.toString() +
        ':00.000Z'
      : date +
        'T' +
        (parseInt(horarioSelected.slice(0, 2)) + 1)
          .toString()
          .padStart(2, '0') +
        ':00:00.000Z'

  const app = {
    date, // Fecha de la cita '2023-10-21'
    start_time: date + 'T' + horarioSelected + ':00.000Z', // Hora de inicio de la cita
    // eslint-disable-next-line camelcase
    end_time, // Hora de inicio de la cita
    notes: 'Ninguna nota adicional', // Notas adicionales
    // petId: '652d6303482a138fed2d5bef', // ID de la mascota
    veterinarianId: vetId, // ID del veterinario
  }
  return app
}

export const format00 = (hora: number, minuto: number) =>
  hora.toString().padStart(2, '0') + ':' + minuto.toString().padStart(2, '0')

export default obtenerDiaInicioMes
