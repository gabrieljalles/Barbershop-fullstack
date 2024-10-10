"use server"

import { db } from "@/lib/prisma"

interface CreateBookingParams {
  userId: string
  serviceId: string
  date: Date
  barbershopId: string
}
export const createBooking = async (params: CreateBookingParams) => {
  await db.booking.create({
    data: params,
  })
}
