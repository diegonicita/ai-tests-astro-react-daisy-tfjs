export const Input = ({
  label,
  altLabel,
  example,
  error,
  name,
  formData,
  setFormData,
}) => {
  const handleChange = (event) => {     
    setFormData(event.target.value)
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
        value={formData}
      />
      <label className="label">
        <span className="label-text-alt text-error invisible">{error}</span>
      </label>
    </>
  )
}
