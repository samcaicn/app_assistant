"use client"
import { DevConfig } from "./dev-config"
import { DevSocketStatus } from "@cs-magic/common-frontend/dist/components/dev-socket-status.js"

export const Dev = () => {
  return (
    <>
      {/*<DevData />*/}

      <DevConfig />

      <DevSocketStatus />
    </>
  )
}
