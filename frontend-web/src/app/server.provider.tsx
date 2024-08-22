import { PropsWithChildren } from "react"

import { JotaiProvider } from "@cs-magic/react/providers/jotai.provider"
import { ScreenProvider } from "@cs-magic/react/providers/screen.provider"
import { ThemeProvider } from "@cs-magic/react/providers/theme.provider"
import { TooltipProvider } from "@cs-magic/react/shadcn/ui/tooltip"

import { SessionProvider } from "./session.provider"

import { TRPCReactProvider } from "@/trpc/react"

export function ServerProvider({ children }: PropsWithChildren) {
  return (
    // 1. data layer
    <SessionProvider>
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
    </SessionProvider>
  )
}
