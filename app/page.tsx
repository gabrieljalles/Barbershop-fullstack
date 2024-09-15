import { db } from "@/lib/prisma"

import { quickSearchOptions } from "@/constants/quickSearch"

import Header from "@/components/Header"
import BarbershopItem from "@/components/BarbershopItem"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

import BookingItem from "@/components/bookingItem"
import { Search } from "lucide-react"

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
        <div className="flex flex-row items-center justify-between gap-2 pt-6">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon" className="p-2">
            <Search />
          </Button>
        </div>

        {/*FAST SEARCH*/}
        <div className="flex gap-3 overflow-x-scroll pt-6 [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary">
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.alt}
              />
              {option.title}
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
      <footer>
        <Card>
          <CardContent className="px-4 py-6">
            <p className="text-sm text-gray-400">
              2024 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
