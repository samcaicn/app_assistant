import { devEnabledAtom } from "@cs-magic/react/dist/store/dev.atom"
import { FlexContainer } from "@cs-magic/react/components/flex-container"
import { useAtom } from "jotai"

export const DevData = () => {
  const [devEnabled] = useAtom(devEnabledAtom)
  if (!devEnabled) return null

  return (
    <div className={"fixed bottom-6 left-0 w-[240px] p-2"}>
      <FlexContainer orientation={"vertical"}></FlexContainer>
    </div>
  )
}
