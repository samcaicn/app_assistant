"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { CircleUser } from "lucide-react"

import { IconContainer } from "@cs-magic/react/dist/components/icon-container.js"
import { cn } from "@cs-magic/react/dist/shadcn/utils.js"

export const UserButton = () => {
  const session = useSession()
  const user = session.data?.user

  return (
    <Link href={user ? "/dashboard" : "/auth"}>
      <IconContainer size={"lg"}>
        <CircleUser className={cn(user && "text-primary-foreground")} />
      </IconContainer>
    </Link>
  )
}
