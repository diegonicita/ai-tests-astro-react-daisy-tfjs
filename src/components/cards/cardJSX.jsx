export const CardJSX = ({ title, description, image, price }) => (
  <div className="card w-full lg:w-60 xl:w-72 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src={'https://mercado.webapp.ar/images/' + image}
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <div>{description}</div>
      <div>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</div>
      <div className="mt-4 card-actions">
        <button className="btn btn-primary">Comprar</button>
      </div>
    </div>
  </div>
)
