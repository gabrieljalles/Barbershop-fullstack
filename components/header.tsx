import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import SidebarSheet from "./SidebarSheet"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image src="/logo.png" alt={"Logo"} height={18} width={120} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
