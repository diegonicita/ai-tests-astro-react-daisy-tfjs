export const Option = ({
  handleAnswered,
  optionAnswered,
  correct,
  numero,
  texto,
}) => {
  
  let backgroundColor = null;
  if (optionAnswered == numero && optionAnswered == correct) {
    backgroundColor = "bg-success text-black font-bold hover:bg-success hover:text-black";
  }
  if (optionAnswered == numero && optionAnswered != correct) {
    backgroundColor = "bg-error text-black font-bold  hover:bg-error hover:text-black";
  } 
  if (optionAnswered && optionAnswered != numero && numero == correct) { 
    backgroundColor = "bg-success text-black font-bold  hover:bg-success hover:text-black";
  }

  return (
  <>
    <div
      className={`btn btn-outline w-full h-fit text-lg text-start justify-start ${backgroundColor}`}
      onClick={() => handleAnswered(numero)}
    >
      {numero}) {texto}
    </div>
  </>
)
}
