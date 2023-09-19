import { toast } from 'react-hot-toast'

export const toastMessage = (msg, color = 'normal') =>
  toast.custom((t) => (
    <div
      className={`text-black font-bold ${
        color == 'normal' ? 'bg-success' : 'bg-error'
      } px-6 py-4 shadow  ${t.visible ? 'animate-enter' : 'animate-leave'}`}
    >
      {msg}
    </div>
  ))
