import { render } from '@testing-library/react'
import CalendarJSX from './calendar'
import { describe, it, expect } from 'vitest'

describe(CalendarJSX, () => {
  it('Calendar Display Days', () => {
    const { getByText } = render(<CalendarJSX />)
    expect(getByText('Lunes')).toBeInTheDocument()
    expect(getByText('Martes')).toBeInTheDocument()
    expect(getByText('Miercoles')).toBeInTheDocument()
    expect(getByText('Jueves')).toBeInTheDocument()
    expect(getByText('Viernes')).toBeInTheDocument()
    expect(getByText('Sabado')).toBeInTheDocument()
    expect(getByText('Domingo')).toBeInTheDocument()
  })
})
