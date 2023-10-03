import { isIterable } from './utils/isIterable'

export const Board = ({ board }) => (
  <div className="border-2 shadow-lg bg-secondary">
    {isIterable(board) &&
      board.map((fila, i) => (
        <div key={i}>
          <div className="flex flex-row h-7 md:h-7 m-0 justify-center items-center">
            {fila.map((columna, j) => (
              <div
                className={`text-2xl bg-secondary text-secondary-content flex flex-row h-7 md:h-7 w-7 md:w-8 justify-center items-center ${
                  j < 2 || j >= fila.length - 2 || i >= board.length - 2
                    ? 'bg-secondary-focus'
                    : ''
                }`}
                key={j}
              >
                {j < 2 || j >= fila.length - 2 || i >= board.length - 2
                  ? ' '
                  : columna}
              </div>
            ))}
          </div>
        </div>
      ))}
  </div>
)
