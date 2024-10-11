"use client"
import { Barbershop, BarbershopService, Booking } from "@prisma/client"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { ptBR } from "date-fns/locale"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Calendar } from "./ui/calendar"
import { useEffect, useState } from "react"
import { TIME_LIST } from "@/constants/TIME_LIST"
import { format, set } from "date-fns"
import { createBooking } from "@/app/_actions/createBooking"
import { toast } from "sonner"
import { useSession } from "next-auth/react"
import { GetBookings } from "@/app/_actions/getBookings"
import { Dialog, DialogContent } from "./ui/dialog"
import SignInDialog from "./signInDialog"

interface ServiceItemProps {
  service: BarbershopService
  barbershop: Barbershop
}

const getTimeList = (bookings: Booking[]) => {
  return TIME_LIST.filter((time) => {
    const hour = Number(time.split(":")[0])
    const minutes = Number(time.split(":")[1])

    //variável explicativa "CLEAN CODE"
    const hasBookingOnCurrentTime = bookings.some(
      (booking) =>
        booking.date.getHours() === hour &&
        booking.date.getMinutes() === minutes,
    )
    if (hasBookingOnCurrentTime) {
      return false
    }
    return true
  })
}

const ServiceItem = ({ service, barbershop }: ServiceItemProps) => {
  const [signInDialogIsOpen, setSignInDialogIsOpen] = useState(false)
  const { data } = useSession()
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined,
  )
  const [dayBookings, setDayBookings] = useState<Booking[]>([])
  const [bookingSheetIsOpen, setBookingSheetIsOpen] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      if (!selectedDay) return
      const bookings = await GetBookings({
        date: selectedDay,
        serviceId: service.id,
      })
      setDayBookings(bookings)
    }
    fetch()
  }, [selectedDay, service.id])

  const handleBookingClick = () => {
    if (data?.user) {
      return setBookingSheetIsOpen(true)
    }
    return setSignInDialogIsOpen(true)
  }

  const handleBookingSheetOpenChange = () => {
    setSelectedDay(undefined)
    setSelectedTime(undefined)
    setDayBookings([])
    setBookingSheetIsOpen(false)
  }

  const handleDateSelected = (date: Date | undefined) => {
    setSelectedDay(date)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleCreateBooking = async () => {
    //1 não exibir horários que já foram agendados
    //2 não deixar usuario reservar se não estiver logado
    try {
      if (!selectedDay || !selectedTime) return

      const hour = Number(selectedTime.split(":")[0])
      const minute = Number(selectedTime.split(":")[1])
      const newDate = set(selectedDay, {
        minutes: minute,
        hours: hour,
      })
      await createBooking({
        serviceId: service.id,
        barbershopId: barbershop.id,
        date: newDate,
      })
      handleBookingSheetOpenChange()
      toast.success("Reserva criada com sucesso!")
    } catch (error) {
      console.error(error)
      toast.error("Erro ao criar reserva!")
    }
  }

  return (
    <>
      <Card>
        <CardContent className="flex items-center gap-3 p-3">
          <div className="flex items-center gap-3">
            {/* IMAGE */}
            <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
              <Image
                src={service.imageUrl}
                fill
                className="rounded-xl object-cover"
                alt={service.name}
              />
            </div>

            {/* DIREITA */}
            <div className="space-y-3">
              <h3 className="font-semibold">{service.name}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>

              {/*Preço e botão*/}
              <div className="item-center flex justify-between">
                <p className="text-sm font-bold text-primary">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(service.price))}
                </p>

                <Sheet
                  open={bookingSheetIsOpen}
                  onOpenChange={handleBookingSheetOpenChange}
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleBookingClick}
                  >
                    Reservar
                  </Button>

                  <SheetContent className="px-0">
                    <SheetHeader>
                      <SheetTitle>Fazer reserva</SheetTitle>
                    </SheetHeader>
                    <div className="border-b border-solid py-5">
                      <Calendar
                        selected={selectedDay}
                        onSelect={handleDateSelected}
                        mode="single"
                        fromDate={new Date()}
                        locale={ptBR}
                        styles={{
                          head_cell: {
                            width: "100%",
                            textTransform: "capitalize",
                          },
                          cell: {
                            width: "100%",
                          },
                          nav_button_previous: {
                            width: "32px",
                            height: "32px",
                          },
                          nav_button_next: {
                            width: "32px",
                            height: "32px",
                          },
                          caption: {
                            textTransform: "capitalize",
                          },
                        }}
                      />
                    </div>
                    {selectedDay && (
                      <div className="flex gap-2 overflow-x-auto border-b border-solid p-5 [&::-webkit-scrollbar]:hidden">
                        {getTimeList(dayBookings).map((time) => (
                          <Button
                            onClick={() => handleTimeSelect(time)}
                            key={time}
                            variant={
                              selectedTime === time ? "default" : "outline"
                            }
                            className="rounded-lg"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    )}

                    {selectedTime && selectedDay && (
                      <div>
                        <div className="p-5">
                          <Card>
                            <CardContent className="space-y-1 p-3">
                              <div className="flex items-center justify-between">
                                <h2 className="font-bold">{service.name}</h2>
                                <p className="text-sm font-bold">
                                  {Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                  }).format(Number(service.price))}
                                </p>
                              </div>

                              <div className="flex items-center justify-between">
                                <h2 className="text-sm text-gray-400">Data</h2>
                                <p className="text-sm text-gray-400">
                                  {format(selectedDay, "d 'de' MMMM", {
                                    locale: ptBR,
                                  })}
                                </p>
                              </div>

                              <div className="flex items-center justify-between">
                                <h2 className="text-sm text-gray-400">
                                  Horário
                                </h2>
                                <p className="text-sm text-gray-400">
                                  {selectedTime}
                                </p>
                              </div>

                              <div className="flex items-center justify-between">
                                <h2 className="text-sm text-gray-400">
                                  Barbearia
                                </h2>
                                <p className="text-sm text-gray-400">
                                  {barbershop.name}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        <SheetFooter className="px-5">
                          <SheetClose asChild>
                            <Button onClick={handleCreateBooking} type="submit">
                              Confirmar
                            </Button>
                          </SheetClose>
                        </SheetFooter>
                      </div>
                    )}
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={signInDialogIsOpen}
        onOpenChange={(open) => {
          setSignInDialogIsOpen(open)
        }}
      >
        <DialogContent>
          <SignInDialog />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ServiceItem
