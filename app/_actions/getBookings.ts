"use server"

import { db } from "@/lib/prisma"
import { endOfDay, startOfDay } from "date-fns"
import { revalidatePath } from "next/cache"

interface GetBookingsProps {
  date: Date
}

export const GetBookings = async ({ date }: GetBookingsProps) => {
  const booking = await db.booking.findMany({
    where: {
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  })
  revalidatePath("/barbershops/[id]")
  return booking
}

//Se você faz um return direto, não precisa de async e await. Uma vez que ele já retorna uma promise.
//Quando for chamar a função GetBookings, basta chamar ela no formato await GetBookings lá fora.
