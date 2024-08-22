"use client"

import { PropsWithChildren } from "react"
import { TRPCReactProvider } from "@/trpc/react"
import { SessionProvider as NextSessionProvider } from "next-auth/react"

import { useDisplayAutoHeight } from "@cs-magic/react/dist/hooks/use-display-auto-height.js"
import { useEnhancedRouter } from "@cs-magic/react/dist/hooks/use-enhanced-router.js"
import { JotaiProvider } from "@cs-magic/react/dist/providers/jotai.provider.js"
import { ScreenProvider } from "@cs-magic/react/dist/providers/screen.provider.js"
import { ThemeProvider } from "@cs-magic/react/dist/providers/theme.provider.js"
import { TooltipProvider } from "@cs-magic/react/dist/shadcn/ui/tooltip.js"

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
