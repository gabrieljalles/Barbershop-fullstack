"use client"
import { Prisma } from "@prisma/client"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { format, isFuture } from "date-fns"
import { ptBR } from "date-fns/locale"
import Image from "next/image"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import PhoneItem from "./PhoneItem"
import { Button } from "./ui/button"
import { toast } from "sonner"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import deleteBooking from "@/app/_actions/deleteBooking"
import { useState } from "react"
import BookingSummary from "./BookingSummary"

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: {
        include: {
          barbershop: true
        }
      }
    }
  }>
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const {
    service: { barbershop },
  } = booking
  const isConfirmed = isFuture(booking.date)
  const handleDeleteBooking = async () => {
    try {
      await deleteBooking(booking.id)
      setIsSheetOpen(false)
      toast.success("Reserva cancelada com sucesso!")
    } catch (error) {
      console.error(error)
      toast.error("Houve um erro ao cancelar a reserva, reserva continua")
    }
  }

  const handleSheetOpenChange = (isOpen: boolean) => {
    setIsSheetOpen(isOpen)
  }

  return (
    <Sheet open={isSheetOpen} onOpenChange={handleSheetOpenChange}>
      <SheetTrigger className="w-full min-w-[90%]">
        <Card className="min-w-[90%]">
          <CardContent className="flex justify-between p-0">
            {/*Left*/}
            <div className="flex flex-col gap-2 p-5">
              <Badge
                className="w-fit"
                variant={isConfirmed ? "default" : "secondary"}
              >
                {isConfirmed ? "Confimado" : "Finalizado"}
              </Badge>

              <h3 className="font-semibold">{booking.service.name}</h3>

              <div className="flex flex-row items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src={booking.service.barbershop.imageUrl}
                    width={4}
                  />
                </Avatar>
                <p className="text-sm">{booking.service.barbershop.name}</p>
              </div>
            </div>

            {/*Right*/}
            <div className="flex flex-col items-center justify-center border-l-2 p-5">
              <p className="text-xl">
                {format(booking.date, "dd", { locale: ptBR })}
              </p>
              <p className="text-sm capitalize">
                {format(booking.date, "MMMM", { locale: ptBR })}
              </p>
              <p className="text-2xl font-semibold">
                {format(booking.date, "HH:mm", { locale: ptBR })}
              </p>
            </div>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Informações da Reserva</SheetTitle>
        </SheetHeader>
        <div className="relative mt-6 flex h-[180px] w-full items-end">
          <Image
            className="rounded-xl object-cover"
            src="/map.svg"
            fill
            alt={`Rota da barbearia${barbershop.name}`}
          />

          <Card className="z-50 mx-5 mb-3 w-full rounded-xl">
            <CardContent className="flex items-center gap-3 px-5 py-3">
              <Avatar>
                <AvatarImage src={barbershop.imageUrl} />
              </Avatar>
              <div>
                <h3 className="font-bold">{barbershop.name}</h3>
                <p className="text-xs">{barbershop.address}</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <Badge
            className="w-fit"
            variant={isConfirmed ? "default" : "secondary"}
          >
            {isConfirmed ? "Confimado" : "Finalizado"}
          </Badge>

          <div className="mb-3 mt-6">
            <BookingSummary
              barbershop={barbershop}
              service={booking.service}
              selectedDate={booking.date}
            />
          </div>

          <div className="flex flex-col gap-2">
            {barbershop.phones.map((phone, index) => (
              <PhoneItem key={index} phone={phone} />
            ))}
          </div>
        </div>
        <SheetFooter>
          <div className="mt-6 flex items-center gap-3">
            <SheetClose className="w-full">
              <Button variant="outline" className="w-full">
                Voltar
              </Button>
            </SheetClose>

            {isConfirmed && (
              <Dialog>
                <DialogTrigger>
                  <Button variant="destructive" className="w-full">
                    Cancelar reserva
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%]">
                  <DialogHeader>
                    <DialogTitle>
                      Você tem certeza que quer <strong>cancelar</strong> o
                      agendamento?
                    </DialogTitle>
                    <DialogDescription>
                      Essa ação não poderá ser desfeita.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <div className="flex items-center gap-3">
                      <DialogClose asChild>
                        <Button variant="secondary" className="w-full">
                          Voltar
                        </Button>
                      </DialogClose>

                      <Button
                        variant="destructive"
                        onClick={handleDeleteBooking}
                      >
                        Cancelar reserva
                      </Button>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default BookingItem
