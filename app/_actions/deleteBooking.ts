"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const DeleteBooking = async (bookingId: string) => {
  await db.booking.delete({
    where: {
      id: bookingId,
    },
  })
  revalidatePath("/bookings") // Atualiza a página depois de  apagar o agendamento
}

export default DeleteBooking
