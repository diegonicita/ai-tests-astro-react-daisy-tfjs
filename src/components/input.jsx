export const Input = ({ label, altLabel, example, error, formData, setFormData }) => (
  <>  
    <label className="label">
      <span className="label-text">{label}</span>
      <span className="label-text-alt">{altLabel}</span>
    </label>
    <input
      type="text"
      placeholder={example}
      className="input input-bordered w-full max-w-xs"
    />
    <label className="label">
      <span className="label-text-alt text-error">{error}</span>
      {/* <span className="label-text-alt">Bottom Right label</span> */}
    </label>
  </>
)
