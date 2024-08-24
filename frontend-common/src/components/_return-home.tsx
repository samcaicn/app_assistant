"use client"

import Link from "next/link"
import React from "react"
import { useAtom } from "jotai"

import { ContentAlertDialog } from "@cs-magic/react/dist/components/content-alert-dialog"
import { Button } from "@cs-magic/shadcn/dist/ui/button"
import { uiAlertDialogContent } from "@cs-magic/react/dist/store/ui.atom"

export const ReturnHomeAlertDialog = ({ content }: { content?: string }) => {
  const [dynamicContent] = useAtom(uiAlertDialogContent)

  return (
    <ContentAlertDialog>
      <div
        className={
          "flex h-full w-full flex-col items-center justify-center gap-8"
        }
      >
        <h2>{content ?? dynamicContent}</h2>
        <Link href="/">
          <Button>返回 AI 的大家族</Button>
        </Link>
      </div>
    </ContentAlertDialog>
  )
}
