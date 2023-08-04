import { z } from 'zod'

export const Z = z.object({
  edad: z.number(),
  creat: z.number(),
  peso: z.number(),
})