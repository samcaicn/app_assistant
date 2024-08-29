import { getWechatAuthorizationUrl } from "@/packages/common/src/auth";
import { FlexContainer } from "@/packages_frontend/react/src/components/flex-container";
import { QRCodeSVG } from "qrcode.react";

export const AuthQrcode = () => {
  const authorizationUrl = getWechatAuthorizationUrl();
  console.log(authorizationUrl);
  return (
    <FlexContainer>
      <QRCodeSVG size={256} value={authorizationUrl} />
    </FlexContainer>
  );
};
