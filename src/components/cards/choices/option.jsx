import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { TailwindToaster } from './tailwindToaster'
import { notifyCorrect } from './notifyCorrect'
import { notifyIncorrect } from './notifyIncorrect'

export const Option = ({
  handleAnswered,
  optionAnswered,
  correct,
  optionNumber,
  texto,
  questionNumber,
}) => {
  useEffect(() => {
    if (optionAnswered == optionNumber && optionAnswered == correct) {
      notifyCorrect(questionNumber)
      confetti()
    }
    if (optionAnswered == optionNumber && optionAnswered != correct) {
      notifyIncorrect(questionNumber)
    }
  }, [optionAnswered])

  let backgroundColor = null
  if (optionAnswered == optionNumber && optionAnswered == correct) {
    backgroundColor =
      'bg-success text-black font-bold hover:bg-success hover:text-black'
  }
  if (optionAnswered == optionNumber && optionAnswered != correct) {
    backgroundColor =
      'bg-error text-black font-bold  hover:bg-error hover:text-black'
  }
  if (optionAnswered && optionAnswered != optionNumber && optionNumber == correct) {
    backgroundColor =
      'bg-success text-black font-bold  hover:bg-success hover:text-black'
  }

  return (
    <>
      <TailwindToaster />
      <div
        className={`btn btn-outline w-full h-fit text-lg text-start justify-start ${backgroundColor}`}
        onClick={() => handleAnswered(optionNumber)}
      >
        {optionNumber}) {texto}
      </div>
    </>
  )
}
