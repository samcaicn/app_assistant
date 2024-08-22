"use client"

import { useSmsSendCode } from "@cs-magic/react/src/hooks/use-sms-send-code"
import { smsCodeCurCountdownSecondsAtom } from "@cs-magic/react/dist/store/sms.atom.js"
import { useAtom } from "jotai"

export const SmsResendCode = () => {
  const [downtime] = useAtom(smsCodeCurCountdownSecondsAtom)
  const sendCode = useSmsSendCode()

  return (
    <div className={"flex items-center text-xs text-muted-foreground "}>
      没有收到验证码？
      {downtime <= 0 ? (
        <span
          onClick={sendCode}
          className={"cursor-pointer hover:text-primary hover:underline"}
        >
          重新发送
        </span>
      ) : (
        `(${downtime}秒)`
      )}
    </div>
  )
}
