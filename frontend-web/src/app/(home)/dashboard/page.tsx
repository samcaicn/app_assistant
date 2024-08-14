"use client"
import { useDraftSession } from "@cs-magic/next-hooks/dist/hooks/use-user.js"
import { UserInputAvatar } from "@cs-magic/common-frontend/components/user-input-avatar"
import { UserInputName } from "@cs-magic/common-frontend/components/user-input-name"
import { UserSignOutButton } from "@cs-magic/common-frontend/components/user-sign-out-button"
import { EditIcon } from "lucide-react"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { FlexContainer } from "@cs-magic/react-ui/components/flex-container"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@cs-magic/react-ui/shadcn/ui/card"
import { Label } from "@cs-magic/react-ui/shadcn/ui/label"
import { Button } from "@cs-magic/react-ui/shadcn/ui/button"

export default function DashboardPage() {
  const session = useSession()
  const user = session.data?.user
  const { value: name, changed: nameChanged } = useDraftSession("name")
  const { changed: imageChanged } = useDraftSession("image")

  // const updateProfile = useUserUpdateProfile()

  const [nameEditable, setNameEditable] = useState(false)

  useEffect(() => {
    if (!nameChanged) setNameEditable(false)
  }, [nameChanged])

  return (
    <FlexContainer
      orientation={"vertical"}
      className={"mx-auto w-full max-w-[480px] !gap-8"}
    >
      <Card className={"w-full text-foreground"}>
        <CardHeader>基本信息</CardHeader>

        <CardContent>
          <div className={"flex w-full gap-4"}>
            <UserInputAvatar />

            <div className={"flex grow flex-col justify-center gap-2"}>
              <div className={"h-8"}>
                {!nameEditable ? (
                  <div className={"flex items-center gap-2"}>
                    <Label className={"text-lg"}>{name}</Label>
                    <EditIcon
                      className={"h-4 w-4 text-muted-foreground"}
                      onClick={() => {
                        setNameEditable(true)
                      }}
                    />
                  </div>
                ) : (
                  <UserInputName
                    onEnter={() => {
                      // setNameEditable(false)
                    }}
                  />
                )}
              </div>

              <CardDescription>id: {user?.id}</CardDescription>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            disabled={!imageChanged && !nameChanged}
            className={"w-full"}
            onClick={async () => {
              // const res = await updateProfile()
              // if (res?.ok) toast.success("更新成功")
              // else toast.error("更新失败")
            }}
          >
            更新
          </Button>
        </CardFooter>
      </Card>

      <UserSignOutButton />
    </FlexContainer>
  )
}
