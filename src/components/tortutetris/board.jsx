import { isIterable } from "./utils/isIterable"

export const Board = ({ board }) => (
  <div className="border-2 p-2 shadow-lg bg-secondary">
    {isIterable(board) &&
      board.map((fila, i) => (
        <div key={i}>
          <div className="flex flex-row h-7 md:h-7 m-1 justify-center items-center">
            {fila.map((columna, j) => (
              <div
                className="text-2xl bg-secondary text-secondary-content flex flex-row h-7 md:h-7 w-7 md:w-8 justify-center items-center"
                key={j}
              >
                {columna}
              </div>
            ))}
          </div>
        </div>
      ))}
  </div>
)
