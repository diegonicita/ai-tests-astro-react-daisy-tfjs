export const Card = ({ id, title, text, src, button }) => (
  <div className="card rounded-none">
    <figure class="w-full">
      <img src={src} alt="Veterinario" className="w-full h-auto rounded-2xl mb-2 p-2" />
    </figure>
    <div className="card-body items-center text-center m-0 p-0 xl:min-h-[10rem]">
      <h2 className="hidden xl:flex card-title m-0 p-0">{title}</h2>
      <p className="hidden xl:flex">{text}</p>
      <div className="card-actions w-4/6 items-center justify-center">
        {id && (
          <div className="btn btn-accent xl:w-full capitalize">{button}</div>
        )}
      </div>
    </div>
  </div>
)
