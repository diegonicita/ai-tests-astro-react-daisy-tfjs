import { Option } from './option'

export const CardJSX = ({
  title,
  description,
  image,
  year,
  opcion1,
  opcion2,
  opcion3,
  opcion4,
  opcion5,
}) => (
  <div className="my-4 text-xl">
    <div className="card-body p-0">
      <h2 className="card-title">
        {title} - Año {year.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
      </h2>
      <div className="w-full">{description}</div>
      <div className="mt-4 card-actions m-0">
        <Option numero="1" texto={opcion1} />
        <Option numero="2" texto={opcion2} />
        <Option numero="3" texto={opcion3} />
        <Option numero="4" texto={opcion4} />
        {opcion5 && <Option numero="5" texto={opcion5} />}
      </div>
    </div>
  </div>
)
