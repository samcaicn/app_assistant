"use client"

import { Button } from "@cs-magic/react/dist/shadcn/ui/button.js"
import { signOut } from "next-auth/react"

export const UserSignOutButton = () => {
  return (
    <Button
      variant={"destructive"}
      onClick={() => signOut()}
      className={"w-full"}
    >
      退出登录
    </Button>
  )
}
