"use client"

import { DevSocketStatus } from "@cs-magic/swot-frontend-common/dist/components/dev-socket-status"

import { DevConfig } from "./dev-config"

export const Dev = () => {
  return (
    <>
      {/*<DevData />*/}

      <DevConfig />

      <DevSocketStatus />
    </>
  )
}
