"use client"

import { useDraftSession } from "@/hooks/use-user"
import { InputWithEnter } from "@cs-magic/react/dist/components/input.js"

export const UserInputName = ({
  onEnter,
}: {
  onEnter?: (s: string) => void
}) => {
  const { draft, value, setDraft } = useDraftSession("name")

  return (
    <InputWithEnter
      className={"text-center text-2xl font-black text-primary-foreground"}
      autoFocus
      value={draft ?? ""}
      onChange={(event) => {
        setDraft(event.currentTarget.value)
      }}
      onEnter={(s) => {
        if (onEnter) onEnter(s)
      }}
    />
  )
}
