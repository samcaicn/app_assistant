"use client"

import { PropsWithChildren } from "react"

import { useDisplayAutoHeight } from "@cs-magic/react/dist/hooks/use-display-auto-height.js"
import { useEnhancedRouter } from "@cs-magic/react/src/hooks/use-enhanced-router"

export function ClientProvider({ children }: PropsWithChildren) {
  useDisplayAutoHeight()

  useEnhancedRouter()

  return <>{children}</>
}
