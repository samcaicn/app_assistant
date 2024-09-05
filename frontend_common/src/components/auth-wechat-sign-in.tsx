import { signIn } from "next-auth/react"

import { WECHAT_PROVIDER_ID } from "@cs-magic/common/dist/auth/providers/wechat/config"
import { cn } from "@cs-magic/shadcn/dist/lib/utils"
import { Button } from "@cs-magic/shadcn/dist/ui/button"

export const AuthWechatSignIn = () => (
  <Button
    size={"sm"}
    className={cn("w-full bg-wechat text-white hover:bg-wechat/50")}
    onClick={async (event) => {
      event.preventDefault()
      await signIn(WECHAT_PROVIDER_ID, { redirect: false })
    }}
  >
    微信登录
  </Button>
)
