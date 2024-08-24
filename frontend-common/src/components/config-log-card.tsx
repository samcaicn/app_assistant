import { useAtom } from "jotai"

import { TrpcLogEnabled } from "./config-trpc-log-enabled"
import { pusherLogLevelAtom } from "@cs-magic/react/dist/store/pusher.atom"
import { StandardCard } from "@cs-magic/react/components/standard-card"
import { LabelLine } from "@cs-magic/react/components/label-line"
import { SelectLogLevel } from "@cs-magic/react/components/select-log-level"

export const ConfigLogCard = () => {
  const [pusherLogLevel, setPusherLogLevel] = useAtom(pusherLogLevelAtom)
  // const [routeLogLevel, setRouteLogLevel] = useAtom(routeLogLevelAtom)

  return (
    <StandardCard title={"log"}>
      <TrpcLogEnabled />

      <LabelLine title={"Pusher Log Level"}>
        <SelectLogLevel value={pusherLogLevel} setValue={setPusherLogLevel} />
      </LabelLine>
    </StandardCard>
  )
}
