import { PropsWithChildren } from "react"

import { FlexContainer } from "@cs-magic/react/components/flex-container"
import { cn } from "@cs-magic/shadcn/dist/lib/utils"

import { Header } from "@/components/header"

export default function SubLayout({ children }: PropsWithChildren) {
  // console.log(ansiColors.red("== SubLayout =="))

  return (
    <FlexContainer
      orientation={"vertical"}
      className={cn(
        "mx-auto h-full max-w-[1080px] !gap-0 overflow-hidden !p-0 ",
        // "bg-cyan-800"
      )}
    >
      <Header />

      <div className={"flex w-full grow flex-col overflow-hidden"}>{children}</div>

      {/*<Footer />*/}
    </FlexContainer>
  )
}
