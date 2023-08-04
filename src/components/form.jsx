import { useState } from 'react'
import { Input } from './input.jsx'
import { Stats } from './stats.jsx'
import { Z } from './formSchema.js'

export const Form = () => {
  const initialValues = { edad: 44, creat: 1.4, peso: 80 }
  const emptyValues = { edad: '', creat: '', peso: '' }
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(emptyValues)
  
  const [resultMans, setResultMans] = useState(null)
  const [resultWomans, setResultWomans] = useState(null)

  const checkRange = (valor, min, max) => {
    const value1 = parseFloat(valor)
    const value2 = value1 < max && value1 > min && value1
    return isNaN(value2) ? false : value2
  }  

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    var obj = {
      edad: checkRange(data.edad, 0, 130),
      creat: checkRange(data.creat, 0, 30),
      peso: checkRange(data.peso, 0, 500),
    }
    setValues({...obj})
    console.log(obj)
    var res = Z.safeParse(obj)
    if (!res.success) {
      const id = res.error.issues[0].path
      const msg = res.error.issues[0].message
      setErrors({ ...emptyValues, [id]: msg })
    } else {
      setErrors(emptyValues)
      const clearence = ((140 - obj.edad) * obj.peso) / obj.creat / 72
      setResultMans(clearence.toFixed(2))
      const clearenceMujeres = clearence * 0.85
      setResultWomans(clearenceMujeres.toFixed(2))
    }
  }

  return (
    <div className="flex flex-row justify-around">
      <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
        <Input
          label="Edad"
          altLabel="Unidad: años"
          errors={errors}
          example={44}
          setValues={setValues}
          values={values}
          name="edad"
        />
        <Input
          label="Creatinina en sangre"
          altLabel="Unidad: mg%"
          errors={errors}
          example={1.4}
          setValues={setValues}
          values={values}
          name="creat"
        />
        <Input
          label="Peso:"
          altLabel="Unidad: kg"
          errors={errors}
          example={80}
          setValues={setValues}
          values={values}
          name="peso"
        />
        <button type="submit" className="btn btn-accent">
          Calcular
        </button>
      </form>
      {resultMans && (
        <div className="flex flex-col w-1/2">
          <Stats value1={resultMans} value2={resultWomans} />
        </div>
      )}
    </div>
  )
}
