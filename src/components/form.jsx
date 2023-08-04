import { useState } from 'react'
import { Input } from './input.jsx'
import { Stats } from './stats.jsx'
import { Z } from './formSchema.js'

export const Form = () => {
  const [edad, setEdad] = useState(44)
  const [creat, setCreat] = useState(1.4)
  const [peso, setPeso] = useState(80)
  const [resultMans, setResultMans] = useState(null)
  const [resultWomans, setResultWomans] = useState(null)

  const checkRange = (valor, min, max) => {
    const value1 = parseFloat(valor)
    const value2 = value1 < max && value1 > min && value1    
    return isNaN(value2)?false:value2
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
    var res = Z.safeParse(obj)
    if (!res.success) console.log(res.error.message)
    else {
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
          error="Tiene que ingresar un numero"
          example={44}
          setFormData={setEdad}
          formData={edad}
          name="edad"
        />
        <Input
          label="Creatinina en sangre"
          altLabel="Unidad: mg%"
          error="Tiene que ingresar un numero"
          example={1.4}
          setFormData={setCreat}
          formData={creat}
          name="creat"
        />
        <Input
          label="Peso:"
          altLabel="Unidad: kg"
          error="Tiene que ingresar un numero"
          example={80}
          setFormData={setPeso}
          formData={peso}
          name="peso"
        />
        <button type="submit" className="btn">
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
