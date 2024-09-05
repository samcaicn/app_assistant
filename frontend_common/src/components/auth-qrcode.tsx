import { FlexContainer } from "@cs-magic/react/dist/components/flex-container";
import { getWechatAuthorizationUrl } from "@cs-magic/common/dist/auth/providers/wechat/utils";
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
