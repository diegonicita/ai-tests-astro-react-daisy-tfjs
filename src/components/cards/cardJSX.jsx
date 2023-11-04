export const CardJSX = ({ title, description, image, price }) => (
  <div className="card text-sm w-full lg:w-70 bg-base-100 shadow-2xl pt-4">
    <figure className="pt-4 border-t-gray border">
      <img
        src={'https://mercado.webapp.ar/images/' + image}
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title mt-0 pt-0">{title}</h2>
      <div>{description}</div>
      <div>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</div>
      <div className="mt-4 card-actions">
        <button className="btn btn-primary">Comprar</button>
      </div>
    </div>
  </div>
)
