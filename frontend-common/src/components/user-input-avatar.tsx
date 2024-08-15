import { useDraftSession } from "@cs-magic/next-hooks"

import { UserAvatar } from "./user-avatar"
import { uploadFile } from "@cs-magic/common/dist/oss/oss.server.js"
import { Label } from "@cs-magic/react-ui/shadcn/ui/label"

export const UserInputAvatar = () => {
  const { draft, setDraft } = useDraftSession("image")

  return (
    <Label className={"h-12 shrink-0 hover:cursor-pointer"}>
      <UserAvatar user={{ id: "", image: draft ?? "", name: "" }} />

      <input
        hidden
        type={"file"}
        accept={"image/jpeg,image/png"}
        onChange={async (event) => {
          const files = event.currentTarget.files
          if (!files?.length) return

          const data = await uploadFile(files[0]!)
          if (data.success) setDraft(data.data)
        }}
      />
    </Label>
  )
}
