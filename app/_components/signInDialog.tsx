import { DialogTitle, DialogDescription } from "./ui/dialog"
import { DialogHeader } from "./ui/dialog"
import { Button } from "./ui/button"
import Image from "next/image"
import { signIn } from "next-auth/react"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando a conta do Google
        </DialogDescription>
      </DialogHeader>

      <Button
        className="gap-1 font-bold"
        variant="outline"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          src="/google.svg"
          width={18}
          height={18}
          alt="Fazer login com google"
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
