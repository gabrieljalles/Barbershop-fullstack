"use client"

import { db } from "@/lib/prisma"

import Header from "@/components/Header"
import BarbershopItem from "@/components/BarbershopItem"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

import { Search } from "lucide-react"

// SERVER COMPONENTS

const Home = async () => {
  //calling the barbershop´s sheet of database
  const barbershops = await db.barbershop.findMany({})
  console.log({ barbershops })

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Gabriel Jalles!</h2>
        <p>Sexta, 16 de Agosto</p>

        {/*Search*/}
        <div className="flex flex-row items-center justify-between gap-2 pt-6">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon" className="p-2">
            <Search />
          </Button>
        </div>

        {/*Banner*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.svg"
            alt={"Um banner mostrando, Agende nos melhores com fsw barber"}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/*AGENDAMENTO CLIENTE*/}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/*Left*/}
            <div className="flex flex-col gap-2 p-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex flex-row items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://github.com/shadcn.png" width={4} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-sm">Barbearia do carlão</p>
              </div>
            </div>

            {/*Right*/}
            <div className="flex flex-col items-center justify-center border-l-2 p-5">
              <p className="text-xl">16</p>
              <p className="text-sm">Agosto</p>
              <p className="text-2xl font-semibold">20:00</p>
            </div>
          </CardContent>
        </Card>

        {/*RECOMENDAÇÕES*/}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  )
}

export default Home
