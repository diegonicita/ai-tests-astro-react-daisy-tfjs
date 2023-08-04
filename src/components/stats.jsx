export const Stats = ({ value1, value2 }) => (
  <div className="stats stats-vertical lg:stats-horizontal shadow items-center">
    <div className="stat flex flex-col justify-center items-center">
      <div className="stat-title">Clearence Hombres</div>
      <div className="stat-value">{value1}</div>
      <div className="stat-desc">ml/min</div>
    </div>

    <div className="stat flex flex-col justify-center items-center">
      <div className="stat-title">Clearence Mujeres</div>
      <div className="stat-value">{value2}</div>
      <div className="stat-desc">ml/min</div>
    </div>
  </div>
)
