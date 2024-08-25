import { Contact } from "wechaty-puppet/payloads"

import { IWechatPreference } from "./bot-preference.js"

export type IWechatBotScan = { value: string; status: number }
export type IUser = Contact
export type IWechatBotTransfer =
  | {
      type: "scan"
      data: IWechatBotScan
    }
  | {
      type: "login"
      data: IUser
    }
  | {
      type: "loggedIn"
      data: boolean
    }
  | {
      type: "preference"
      data: IWechatPreference
    }
  | {
      type: "contacts"
      data: IUser[]
    }
export type LlmScenario = "chatter" | "parser"
