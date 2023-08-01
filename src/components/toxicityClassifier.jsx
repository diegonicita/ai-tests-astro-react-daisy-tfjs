import React, { useState, useEffect } from 'react'
import { Table } from '../components/table'

export const ToxicityClassifier = () => {
  const [response, setResponse] = useState(undefined)
  const text1 =
    'I hate this movie so much! Worst movie ever. What a horrible show.'
  const text2 =
    "I hate swimming! Swimming is the worst. I hate swimming so much. I wish I didn't have to swim."

  useEffect(() => {
    const threshold = 0.5

    const loadModelAndClassify = async () => {
      try {
        // Cargar el modelo de toxicidad
        const model = await toxicity.load(threshold)

        //   // Realizar la clasificación
        const predictions = await model.classify([text1, text2])
        setResponse(predictions)
      } catch (error) {
        setResponse('Error loading the model:', error)
      }
    }

    loadModelAndClassify()
  }, [])

  return (
    <div className="bg-gray-100 flex flex-col">
      <h1 class="ml-2 mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Toxicity Classifier
        </span>{' '}
        Test
      </h1>
      <div className="ml-2 mb-4 text-md">
        <span className="font-extrabold">text1 (T1):</span> {text1}{' '}
      </div>
      <div className="ml-2 mb-4 text-md">
        <span className="font-extrabold">text2 (T2):</span> {text2}{' '}
      </div>      
        <Table data={response} /> 
    </div>
  )
}
