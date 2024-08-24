import { useAtom } from "jotai"

import { requestsSlideTextVisibleAtom } from "../store/ui.atom"
import { StandardCard } from "@cs-magic/react/components/standard-card"
import { devEnabledAtom } from "@cs-magic/react/dist/store/dev.atom"
import { LabelLine } from "@cs-magic/react/components/label-line"
import { Switch } from "@cs-magic/shadcn/dist/ui/switch"

export const ConfigDevCard = () => {
  const [devEnabled, setDevEnabled] = useAtom(devEnabledAtom)
  const [requestsSlideTextDisplay, setRequestsSlideTextDisplay] = useAtom(
    requestsSlideTextVisibleAtom,
  )

  return (
    <StandardCard title={"Dev"}>
      <LabelLine title={"Dev Enabled"}>
        <Switch checked={devEnabled} onCheckedChange={setDevEnabled} />
      </LabelLine>

      <LabelLine title={"Requests Slide Text On"}>
        <Switch
          checked={requestsSlideTextDisplay}
          onCheckedChange={setRequestsSlideTextDisplay}
        />
      </LabelLine>
    </StandardCard>
  )
}
