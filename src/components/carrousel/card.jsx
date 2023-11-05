export const Card = ({ id, title, text, src }) => (
  <div className="card rounded-none border border-black bg-yellow-300">
    <figure>
      <img
        src={src}
        alt="Veterinario"               
        className="w-auto max-h-[20rem]"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p className="hidden xl:flex">{text}</p>
      <div className="card-actions w-4/6 items-center justify-center">
        {id && (
          <div className="btn btn-accent text-base w-full max-w-sm capitalize">
            Pedir Cita
          </div>
        )}
      </div>
    </div>
  </div>
)


