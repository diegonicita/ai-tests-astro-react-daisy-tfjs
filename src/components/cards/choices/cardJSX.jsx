export const CardJSX = ({ title, description, image, price, opcion1, opcion2, opcion3, opcion4, opcion5 }) => (
  <div className="card bg-base-100 shadow-xl">    
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <div>{description}</div>
      <div>Año: {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</div>
      <div className="mt-4 card-actions">
        <div className="btn btn-primary">1) {opcion1}</div>
        <div className="btn btn-primary">2) {opcion2}</div>
        <div className="btn btn-primary">3) {opcion3}</div>
        <div className="btn btn-primary">4) {opcion4}</div>
        {opcion5 && <div className="btn btn-primary">5) {opcion5}</div>}
      </div>
    </div>
  </div>
)
