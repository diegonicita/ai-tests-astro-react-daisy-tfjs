import { Option } from './option'
import { useState } from 'react'

export const Question = ({
  questionNumber,
  title,
  description,
  image,
  year,
  correct,
  options,
}) => {
  const [optionAnswered, setOptionAnswered] = useState(null)
  const handleAnswered = (numero) => {
    if (optionAnswered === null) setOptionAnswered(numero)
  }

  return (
    <div className="my-4 text-xl">
      <div className="card-body p-0">
        <h2 className="card-title">
          {title} - Año {year.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
        </h2>
        <div className="w-full">{description}</div>
        <div className="mt-4 card-actions m-0">
          {options.map(
            (option, index) =>
              option && (
                <Option
                  questionNumber={questionNumber}
                  handleAnswered={handleAnswered}
                  optionAnswered={optionAnswered}
                  correct={correct}
                  optionNumber={index + 1}
                  texto={option}
                />
              ),
          )}
        </div>
      </div>
    </div>
  )
}
