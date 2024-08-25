"use client"

import QRCode from "qrcode.react"

import { getWechatAuthorizationUrl } from "@cs-magic/common/dist/auth/index"
import { FlexContainer } from "@cs-magic/react/components/flex-container"

export default function HomePAge() {
  const authorizationUrl = getWechatAuthorizationUrl()
  console.log(authorizationUrl)

  return (
    <FlexContainer>
      <QRCode size={256} value={authorizationUrl} />
    </FlexContainer>
  )
}
