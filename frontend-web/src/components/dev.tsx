"use client"
import { DevConfig } from "./dev-config"
import { DevSocketStatus } from "@cs-magic/swot-frontend-common/dist/components/dev-socket-status.js"

export const Dev = () => {
  return (
    <>
      {/*<DevData />*/}

      <DevConfig />

      <DevSocketStatus />
    </>
  )
}
