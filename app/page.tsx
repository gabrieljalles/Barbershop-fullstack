import { db } from "@/lib/prisma"

import { quickSearchOptions } from "@/constants/quickSearch"

import Header from "@/components/Header"
import BarbershopItem from "@/components/BarbershopItem"

import { Button } from "../components/ui/button"
import Image from "next/image"

import BookingItem from "@/components/BookingItem"
import Search from "@/components/Search"
import Link from "next/link"

// SERVER COMPONENTS
const Home = async () => {
  //calling the barbershop´s sheet of database
  const barbershops = await db.barbershop.findMany({})
  const popularBerbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Gabriel Jalles!</h2>
        <p>Sexta, 16 de Agosto</p>

        {/*SEARCH*/}
        <div className="mt-6">
          <Search />
        </div>

        {/*FAST SEARCH*/}
        <div className="flex gap-3 overflow-x-scroll pt-6 [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" asChild>
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
          />
        </div>

        {/*CLIENT APOINTMENT*/}
        <BookingItem />

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
