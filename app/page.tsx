"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import Header from "@/components/header"
import { Search } from "lucide-react"
import Image from "next/image"

// SERVER COMPONENTS

const Home = () => {
  const [] = useState()
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Gabriel Jalles!</h2>
        <p>Sexta, 16 de Agosto</p>

        {/*Search input*/}
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
      </div>
    </div>
  )
}

export default Home
