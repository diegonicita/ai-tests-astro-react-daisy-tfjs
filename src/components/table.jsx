export const Table = ({data}) => (
  <>
    <div className="overflow-x-auto">
      <table className="table table-zebra">        
        <thead>
          <tr>
            <th>Id</th>
            <th>Property</th>
            <th>T1-0</th>
            <th>T1-1</th>
            <th>T1-Match</th>
            <th>T2-0</th>
            <th>T2-1</th>
            <th>T2-Match</th>
          </tr>
        </thead>
        <tbody> 
        {data &&
          data.map((item, index) => (
            <tr key={index}>
              <th>{index}</th>
              <td style={{ fontWeight: 'bold' }}> {item.label}</td>
              <td> {JSON.stringify(item.results[0].probabilities[0].toFixed(3))}</td>
              <td> {JSON.stringify(item.results[0].probabilities[1].toFixed(3))}</td>
              <td> {JSON.stringify(item.results[0].match)}</td>
              <td> {JSON.stringify(item.results[1].probabilities[0].toFixed(3))}</td>
              <td> {JSON.stringify(item.results[1].probabilities[1].toFixed(3))}</td>
              <td> {JSON.stringify(item.results[1].match)}</td>
            </tr>
          ))}                  
        </tbody>
      </table>
    </div>
  </>
)
