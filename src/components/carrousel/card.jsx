export const Card = ({ id, title, text, src }) => (
  <div className="card rounded-none">
    <figure>
      <img src={src} alt="Veterinario" className="w-auto max-h-[13rem] rounded-2xl mb-2" />
    </figure>
    <div className="card-body items-center text-center m-0 p-0">
      <h2 className="hidden xl:flex card-title m-0 p-0">{title}</h2>
      <p className="hidden xl:flex">{text}</p>
      <div className="card-actions w-4/6 items-center justify-center">
        {id && (
          <div className="btn btn-accent xl:w-full capitalize">Pedir Cita</div>
        )}
      </div>
    </div>
  </div>
)
