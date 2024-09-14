import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

const BookingItem = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItem
