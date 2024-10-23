import { db } from "@/lib/prisma"

import { quickSearchOptions } from "@/constants/quickSearch"

import Header from "@/app/_components/Header"
import BarbershopItem from "@/app/_components/BarbershopItem"

import { Button } from "@/app/_components/ui/button"
import Image from "next/image"

import BookingItem from "@/app/_components/BookingItem"
import Search from "@/app/_components/Search"
import Link from "next/link"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { ptBR } from "date-fns/locale"
import { format } from "date-fns"
import { getConfirmedBookings } from "./_data/get-confirmed-bookings"

// SERVER COMPONENTS
const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  const popularBerbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  const confirmedBookings = await getConfirmedBookings()
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : "Seja bem vindo"}!
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd ", { locale: ptBR })}
          </span>
          de
          <span className="capitalize">
            {format(new Date(), "' 'MMMM", { locale: ptBR })}
          </span>
        </p>

        {/*SEARCH*/}
        <div className="mt-6">
          <Search />
        </div>

        {/*FAST SEARCH*/}
        <div className="flex gap-3 overflow-x-scroll pt-6 [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.alt}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        {/*BANNER*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.svg"
            alt={"Um banner mostrando, Agende nos melhores com fsw barber"}
            fill
            className="rounded-lg object-cover"
            key="/banner-01.svg"
          />
        </div>

        {/*CLIENT APOINTMENT*/}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Agendamentos
            </h2>
            <div className="mb-1 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </div>
          </>
        )}

        {/*RECOMENDAÇÕES*/}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/*POPULARES*/}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Popupalares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBerbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
