import Weeks from './weeks'
import Selectors from './selectors'
import { days, months } from './constants'
import { scrollToSection } from './scrollToSection'
import { useState, useRef, type ChangeEvent, type SetStateAction } from 'react'
import useDate from './useDate'

const CalendarJSX = () => {
  const {
    monthState,
    yearState,
    arrayMesActual,
    handleChangeMonth,
    handleChangeYear,
  } = useDate()

  const [dateFilter, setDateFilter] = useState<null | number>(null)
  const horariosRef = useRef<HTMLDivElement>(null)
  const handleDateFilter = (date: SetStateAction<number | null>) => {
    setDateFilter(date)
    if (horariosRef) scrollToSection(horariosRef)
  }

  const handleChangeSelector = (event: ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name
    const value = event.target.value
    if (name === 'monthSelector') handleChangeMonth(parseInt(value))
    if (name === 'yearSelector') handleChangeYear(parseInt(value))
    setDateFilter(null)
  }

  return (
    <div className="max-w-[40rem] m-auto">
      <div className="mt-4">
        <div className="flex flex-col mx-1 border-b-2">
          <div>
            <Selectors
              monthState={monthState}
              yearState={yearState}
              handleChangeSelector={handleChangeSelector}
            />
          </div>
          <div className="flex justify-between items-center font-small uppercase pt-8 mb-4">
            {days.map((w, index) => (
              <span
                key={index}
                className="w-full font-bold flex justify-center items-center"
              >
                <span className="text-sm text-accent">{w}</span>
              </span>
            ))}
          </div>
          <div className="flex flex-col justify-between font-medium">
            <Weeks
              desde={undefined}
              hasta={undefined}
              data={arrayMesActual}
              setDateFilter={handleDateFilter}
            />
          </div>
        </div>
        <div ref={horariosRef} className="pt-10"></div>
        <div className="flex flex-col justify-between font-medium text-sm text-center">
          {dateFilter && (
            <>
              <div> Seleccionaste: </div>
              <h2 className="text-3xl mb-4 font-bold">
                {dateFilter} de {months[monthState].mes}
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CalendarJSX
