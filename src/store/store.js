import create from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      count: 20,
      inc: () => set((state) => ({ count: state.count + 1 })),
      dec: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'food-storage', // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
