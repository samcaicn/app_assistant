"use client"

import { useAtomValue } from "jotai"
import React from "react"

import {
  cardPreviewEngineTypeSchema,
  GenCardApproach,
} from "@cs-magic/swot-backend/dist/schema/card.js"
import { cn } from "@cs-magic/react/dist/shadcn/utils.js"
import { StandardCard } from "@cs-magic/react/dist/components/standard-card.js"
import { AtomSelector } from "@cs-magic/react/dist/components/atom-switcher.js"
import { Separator } from "@cs-magic/react/dist/shadcn/ui/separator.js"
import { useSearchParam } from "@cs-magic/react/dist/hooks/use-search-param.js"

import { cardPreviewAtom } from "@cs-magic/swot-frontend-common/dist/store/card.atom.js"
import { cardPreviewEngineAtom } from "@cs-magic/swot-frontend-common/dist/store/card.rendered.atom.js"
import { CardInputBackend } from "@cs-magic/swot-frontend-common/dist/components/card-input-backend.js"
import { CardInputFrontend } from "@cs-magic/swot-frontend-common/dist/components/card-input-frontend.js"
import { CardPreviewContainer } from "@/components/card-preview-container"

export const Card = () => {
  const preview = useAtomValue(cardPreviewAtom)
  const renderType = useSearchParam<GenCardApproach>("renderType") ?? "frontend"

  const Input = renderType === "backend" ? CardInputBackend : CardInputFrontend
  // const Input = CardInputFrontend

  console.log({ preview })

  return (
    <div
      className={cn(
        "mx-auto grid h-full w-full grid-cols-1 gap-4 overflow-auto p-2 sm:grid-cols-2 sm:p-4",
      )}
    >
      <StandardCard title={"Input Control"}>{<Input />}</StandardCard>

      <StandardCard title={"Preview"} id={"card-previews"}>
        <AtomSelector
          atom={cardPreviewEngineAtom}
          name={"preview-engine"}
          vs={cardPreviewEngineTypeSchema.options}
        />

        <Separator orientation={"horizontal"} />

        <CardPreviewContainer
          genCardApproach={renderType}
          preview={preview}
          withActions
        />
      </StandardCard>
    </div>
  )
}

export default Card
