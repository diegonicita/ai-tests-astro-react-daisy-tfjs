import { type ChangeEvent } from 'react'
import { months, years } from './constants'

type Props = {
  monthState: number
  yearState: number
  handleChangeSelector: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Selectors = ({ monthState, yearState, handleChangeSelector }: Props) => {
  return (
    <>
      <div className="flex justify-center gap-4">
        <select
          name="monthSelector"
          defaultValue={monthState}
          className="select select-sm select-bordered w-full max-w-[12rem] text-lg"
          onChange={handleChangeSelector}
        >
          {months &&
            months.map((m, index) => (
              <option key={index} value={m.numero.toString()}>
                {m.mes}
              </option>
            ))}
        </select>
        <select
          name="yearSelector"
          defaultValue={yearState}
          className="select select-sm select-bordered w-full max-w-[12rem] text-lg"
          onChange={handleChangeSelector}
        >
          {years &&
            years.map((y, index) => (
              <option key={index} value={y}>
                {y}
              </option>
            ))}
        </select>
      </div>
    </>
  )
}

export default Selectors
