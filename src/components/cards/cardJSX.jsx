export const CardJSX = ({ title, description, image, price }) => (
  <div className="card text-sm w-full lg:w-70 bg-base-100 shadow-lg p-2 hover:shadow-2xl transition duration-300 ease px-0 pt-2 hover:cursor-pointer">
    <figure className="pt-4">
      <img
        src={'https://mercado.webapp.ar/images/' + image}
        alt="Shoes"
        className="w-full brightness-90 hover:brightness-95"
      />
    </figure>
    <div className="card-body items-center text-center p-0">
      <div className="card-body py-2 px-2">{description}</div>
    </div>
    <div className="px-4">
      <div className="text-lg font-bold">
        ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
      </div>

      <div className="text-accent-content font-bold mt-2 pb-2">
        Envío Gratis{' '}
      </div>
    </div>
  </div>
)
