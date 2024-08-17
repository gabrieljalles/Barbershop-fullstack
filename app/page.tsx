"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Header from "@/components/header"
import { Search } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// SERVER COMPONENTS

const Home = () => {
  const [] = useState()
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
        <Card className="mt-6">
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

        {/**/}
      </div>
    </div>
  )
}

export default Home
