import React, { useState, useEffect } from 'react'

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
    <div className="bg-color-red">
      <h1>Toxicity Classifier</h1>
      <div> text1: {text1} </div>
      <div> text2: {text2} </div>
      <div>
        {response &&
          response.map((item, index) => (
            <div key={index}>
              <p style={{ fontWeight: 'bold' }}> {item.label} </p>
              <div> text1: {JSON.stringify(item.results[0])}</div>
              <div> text2: {JSON.stringify(item.results[1])}</div>
            </div>
          ))}
      </div>
    </div>
  )
}
