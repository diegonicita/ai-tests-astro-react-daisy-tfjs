import { useState } from 'react'
import { Input } from './input.jsx'

export const Form = () => {
  const [formData, setFormData] = useState({ name: 'sdfsdfsdf', email: 'sdfsdfsdf', message: 'asdasdads' })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
      <Input
        label="Creatinina en sangre"
        altLabel="Unidad: mg%"
        error="Tiene que ingresar un numero"
        example={1.4}
        setFormData={setFormData}
        formData={formData}
      />
      <Input
        label="Peso:"
        altLabel="Unidad: kg"
        error="Tiene que ingresar un numero"
        example={80}
        setFormData={setFormData}
        formData={formData}
      />
      <Input
        label="Altura:"
        altLabel="Unidad: metros"
        error="Tiene que ingresar un numero"
        example={1.8}
        setFormData={setFormData}
        formData={formData}
      />
      <button type="submit" className="btn">
        Calcular
      </button>
    </form>
  )
}
