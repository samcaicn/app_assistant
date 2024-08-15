"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@cs-magic/react/dist/shadcn/ui/alert-dialog.js"
import { useAtom } from "jotai"

import { signIn } from "next-auth/react"

import { checkAuthAlertDialogOpenAtom } from "@cs-magic/common-frontend/dist/store/ui.atom.js"

export const CheckAuthAlertDialog = () => {
  const [open, setOpen] = useAtom(checkAuthAlertDialogOpenAtom)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogTitle>发送失败</AlertDialogTitle>
        <AlertDialogDescription>
          您需要先登陆才能发送哦！
        </AlertDialogDescription>
        <AlertDialogFooter className={"gap-4"}>
          <AlertDialogAction onClick={() => signIn()}>
            点击跳转登录
          </AlertDialogAction>
          <AlertDialogCancel>放弃</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
