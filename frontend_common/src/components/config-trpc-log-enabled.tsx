import { atom, useAtom } from "jotai"

import { LabelLine } from "@cs-magic/react/dist/components/label-line"
import { Switch } from "@cs-magic/shadcn/dist/ui/switch"

// todo
export const trpcReactLogEnabledAtom = atom(false)

export const TrpcLogEnabled = () => {
  const [trpcReactLogEnabled, setTrpcReactLogEnabled] = useAtom(trpcReactLogEnabledAtom)
  return (
    <LabelLine title={"TRPC React Log Enabled"}>
      <Switch checked={trpcReactLogEnabled} onCheckedChange={setTrpcReactLogEnabled} />
    </LabelLine>
  )
}
