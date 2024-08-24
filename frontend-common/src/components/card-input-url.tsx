"use client"

import { useAtom } from "jotai"
import React from "react"

import { cardArticleUrlAtom } from "../store/card.atom"
import { LabelLine } from "@cs-magic/react/components/label-line"
import { Input } from "@cs-magic/shadcn/dist/ui/input"

export const CardInputUrl = () => {
  const [inputUrl, setInputUrl] = useAtom(cardArticleUrlAtom)

  return (
    <LabelLine title={"url"}>
      <Input
        id={"card-input-url"}
        placeholder={"支持小红书、Bilibili……"}
        className={"grow"}
        value={inputUrl}
        onChange={(event) => {
          setInputUrl(event.currentTarget.value)
        }}
      />
    </LabelLine>
  )
}
