"use client"

import { SessionProvider as NextSessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

import { useDisplayAutoHeight } from "@cs-magic/react/dist/hooks/use-display-auto-height"
import { useEnhancedRouter } from "@cs-magic/react/dist/hooks/use-enhanced-router"
import { JotaiProvider } from "@cs-magic/react/dist/providers/jotai.provider"
import { ScreenProvider } from "@cs-magic/react/dist/providers/screen.provider"
import { ThemeProvider } from "@cs-magic/react/dist/providers/theme.provider"
import { TooltipProvider } from "@cs-magic/shadcn/dist/ui/tooltip"

import { TRPCReactProvider } from "@/trpc/react"

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  useDisplayAutoHeight()

  useEnhancedRouter()

  return (
    // 1. data layer
    <NextSessionProvider>
      <JotaiProvider>
        <TRPCReactProvider>
          {/* 2. ui layer */}
          <ThemeProvider defaultTheme={"dark"} attribute={"class"}>
            <TooltipProvider>
              <ScreenProvider>{children}</ScreenProvider>
            </TooltipProvider>
          </ThemeProvider>
        </TRPCReactProvider>
      </JotaiProvider>
    </NextSessionProvider>
  )
}
