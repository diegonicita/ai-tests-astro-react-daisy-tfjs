export const Input = ({
  label,
  altLabel,
  example,
  errors,
  name,
  values,
  setValues,
}) => {
  const handleChange = (event) => {
    const obj = { ...values, [name]: event.target.value }
    setValues(obj)
    console.log(obj)
  }

  return (
    <>
      <label className="label">
        <span className="label-text">{label}</span>
        <span className="label-text-alt">{altLabel}</span>
      </label>
      <input
        id={name}
        name={name}
        type="string"
        placeholder={example}
        className="input input-bordered w-full max-w-xs shadow"
        onChange={handleChange}
        value={values[name]}
      />
      <label className="label">
        <span className="label-text-alt text-error">{errors[name]}</span>
      </label>
    </>
  )
}
