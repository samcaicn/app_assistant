import { getWechatAuthorizationUrl } from "@/packages/common/src/auth"
import { FlexContainer } from "@/packages_frontend/react/src/components/flex-container"

export const AuthQrcode = () => {
  const authorizationUrl = getWechatAuthorizationUrl()
  console.log(authorizationUrl)
  return (
    <FlexContainer>
      <QRCode size={256} value={authorizationUrl} />
    </FlexContainer>
  )
}
