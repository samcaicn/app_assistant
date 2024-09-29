import { type WechatyBuilder } from "wechaty";
import { Message as MessagePayload } from "wechaty-puppet/esm/src/mods/payloads";

import { IBotContext } from "./index";

declare module "wechaty-puppet/esm/src/mods/payloads" {
  /**
   * todo: extend not works, @see: https://chat.openai.com/c/3360abde-c640-4e31-878a-a5be82e2ce07
   */
  type Message = MessagePayload & {
    isRoom: boolean;
  };
}

declare module "wechaty" {
  interface Wechaty extends ReturnType<typeof WechatyBuilder.build> {
    context?: IBotContext;
  }

  // class Message extends BaseMessage {
  //   get isRoom() {
  //     return !!this.room()
  //   }
  //
  //   get roomId() {
  //     return this.room()?.id
  //   }
  //
  //   get talkerId() {
  //     return this.talker().id
  //   }
  // }
}
