export const CardJSX = ({
  title,
  description,
  image,
  price,
  opcion1,
  opcion2,
  opcion3,
  opcion4,
  opcion5,
}) => (
  <div className="card bg-base-100 shadow-lg shadow-stone-400 my-4 max-w-4xl text-xl">
    <div className="card-body items-center">
      <h2 className="card-title">{title}</h2><div>Año: {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</div>
      <div className="w-full">{description}</div>      
      <div className="mt-4 card-actions flex-col items-center">
        <div className="btn btn-outline w-full h-fit  text-lg">1) {opcion1}</div>
        <div className="btn btn-outline w-full h-fit text-lg">2) {opcion2}</div>
        <div className="btn btn-outline w-full h-fit text-lg">3) {opcion3}</div>
        <div className="btn btn-outline w-full h-fit text-lg">4) {opcion4}</div>        
        {opcion5 && (
          <div className="btn btn-outline w-full h-fit text-lg">
            5) {opcion5}
          </div>
        )}
      </div>
    </div>
  </div>
)
