import { moment } from "@cs-magic/common/dist/datetime/index.js"
import { useAtom } from "jotai"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"
import { forwardRef } from "react"

import { AspectRatio } from "@cs-magic/react-ui/shadcn/ui/aspect-ratio"
import { ICardPreview } from "@cs-magic/swot-backend/schema"

import { Tags } from "./card-content-tags"
import MarkMap from "./markmap"
import { UserAvatar } from "./user-avatar"
import {
  cardAuthorAvatarRenderedAtom,
  cardCoverRenderedAtom,
  cardUserAvatarRenderedAtom,
} from "../store/card.rendered.atom"
import { cardWatermarkTextAtom } from "../store/card.request.atom"
import { getPlatformName } from "../utils/card-platform/get-platform-name"
import CsMagicBlackLogoSvg from "@/../../../assets/branding/cs-magic_logo_1280.svg"
import { IUserSummary } from "@cs-magic/common/dist/schema/user.summary.js"
import { cn } from "@cs-magic/react-ui/shadcn/utils"
import { VerticalAspectRatio } from "@cs-magic/react-ui/components/aspect-ratio"

/**
 * null optional nullish
 */

export const CardPreview = forwardRef<
  HTMLDivElement,
  {
    user?: IUserSummary | null
    preview?: ICardPreview | null
  }
>(({ preview, user }, ref) => {
  console.log({ user, preview })

  const [cardUserAvatarRendered, setCardUserAvatarRendered] = useAtom(
    cardUserAvatarRenderedAtom,
  )
  const [, setCardCoverRendered] = useAtom(cardCoverRenderedAtom)
  const [cardAuthorAvatarRendered, setCardAuthorAvatarRendered] = useAtom(
    cardAuthorAvatarRenderedAtom,
  )
  const [cardWatermarkText] = useAtom(cardWatermarkTextAtom)

  return (
    <div
      ref={ref}
      id={"card-preview"}
      className={cn("font-songti", " card-bg p-4 text-primary2 text-[12px]")}
    >
      <div
        id={"card-preview-outer-header"}
        className={cn(
          "font-pingfang",
          "flex flex-col items-center font-light text-primary2 p-4 gap-2",
        )}
      >
        <div className={"flex items-center font-normal"}>
          <CsMagicBlackLogoSvg className={"w-8 h-8"} />
          <span className={"text-2xl"}>CS魔法社</span>
        </div>

        <div className={"flex text-primary2"}>
          —— 飞脑摘要：你的时间很重要 ——
          {/*—— 飞脑：你的下一代个人助理 ——*/}
          {/*—— 飞脑：回归人的价值 ——*/}
        </div>
      </div>

      <div
        id={"card-preview-inner-1"}
        className={cn(
          "flex flex-col gap-4 bg-white p-4 relative rounded-tl-[23px] rounded-tr-[10px]",
        )}
      >
        <div
          id={"card-preview-inner-header"}
          className={"flex items-center gap-2 h-10"}
        >
          <UserAvatar
            user={user ?? null}
            imageProps={{
              onLoad: () => {
                setCardUserAvatarRendered(true)
              },
              onChange: () => setCardUserAvatarRendered(false),
            }}
          />
          <div className={"overflow-hidden"}>
            <div className={"text-[16px] truncate"}>{user?.name}</div>
            <span>分享给你一篇文章</span>
          </div>

          <div className={"ml-auto flex items-center gap-2 h-full shrink-0"}>
            <div className={"flex flex-col items-end text-light"}>
              {/*<div>{truncate(preview?.inner?.id ?? "", { length: 16 })}</div>*/}
              <div>{moment().format("YYYY-MM-DD")}</div>

              <div>{preview?.inner?.summary?.model}</div>
            </div>

            <div className={"w-[3px] bg-primary2 h-7"} />
          </div>
        </div>

        <div id={"card-preview-inner-cover"}>
          <AspectRatio ratio={2.35} className={"overflow-hidden rounded-lg"}>
            {preview?.inner?.cover?.url && (
              <Image
                src={preview?.inner?.cover?.url}
                fill
                alt={"cover"}
                className={"object-cover h-auto"}
                onLoad={() => setCardCoverRendered(true)}
                onChange={() => setCardCoverRendered(false)}
              />
            )}
          </AspectRatio>
        </div>

        <div
          id={"card-preview-inner-title"}
          className={"text-[16px] font-black text-justify"}
        >
          {preview?.inner?.title}
        </div>

        <div id={"card-preview-inner-description"} className={"text-justify"}>
          {preview?.inner?.summary?.parsed.description}
        </div>

        <div
          className={"bg-gray-50 rounded-lg p-2 bg-dots relative"}
          id={"card-preview-mindmap"}
        >
          <MarkMap content={preview?.inner?.summary?.parsed.mindmap} />
          {cardWatermarkText && (
            <div
              className={
                "absolute inset-0 w-full h-full flex justify-center items-center text-2xl text-muted-foreground font-black tracking-[2rem]"
              }
            >
              {cardWatermarkText}
            </div>
          )}
        </div>

        <Tags tags={preview?.inner?.summary?.parsed.tags} />
      </div>

      <div
        className={cn(
          // " card-notch-2",
          "ticket w-full flex items-center justify-center px-4",
        )}
      >
        <div
          className={cn("w-full h-[1px]")}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='rgba(199,199,199)' stroke-width='4' stroke-dasharray='5%2c 10' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`,
          }}
        />
      </div>

      <div id={"inner-2"} className={"bg-white p-4 rounded-b-[10px]"}>
        <div
          id={"card-preview-inner-bottom"}
          className={cn(
            "flex items-center gap-2",
            // 安卓手机上的二维码应该最少36px才可以被正常扫描（对于长链接）
            // todo: 长链接前后端的二维码复杂度不一样， e.g.
            // http://mp.weixin.qq.com/s?__biz=MzUzMjY0NDY4Ng==&amp;mid=2247501975&amp;idx=1&amp;sn=4aaf236bbe699fc823cd21294fd53549&amp;chksm=fab29eb6cdc517a0c4a92e0699aaa702ba5bf5273cf406955cb1fe76474b8ab93c3bb4f3a6ea&amp;mpshare=1&amp;scene=1&amp;srcid=05071hBRoirmnwmgxjcJgari&amp;sharer_shareinfo=42ee8660a40a6392e2d2d61eb681e18d&amp;sharer_shareinfo_first=42ee8660a40a6392e2d2d61eb681e18d#r
            " h-8",
          )}
        >
          <UserAvatar
            imageProps={{
              onLoad: () => {
                // 如果不加这个限制的话，可能在没有数据时置true
                // if (preview?.inner?.author)
                setCardAuthorAvatarRendered(true)
              },
              // onChange 有时候是不够的，比如是hidden状态，导致直接跳过
              onChange: () => setCardAuthorAvatarRendered(false),
            }}
            user={preview?.inner?.author ?? null}
            avatarProps={{ className: "rounded-none" }}
          />
          <div className={"text-[10px] text-gray-500 font-light"}>
            <div>{preview?.inner?.author?.name}</div>
            <div>
              <span>
                {moment(preview?.inner?.time).fromNow().replace(/\s+/g, "")}
              </span>
              <span>发表于</span>
              <span>{getPlatformName(preview?.inner?.platformType)}</span>
            </div>
          </div>

          <div className={"ml-auto flex h-full shrink-0 items-center"}>
            {/*<div className={"w-8 text-xs text-muted-foreground"}>查看原文</div>*/}
            <VerticalAspectRatio ratio={1}>
              <QRCodeSVG
                value={preview?.inner?.sourceUrl ?? ""}
                className={"h-full w-full"}
              />
            </VerticalAspectRatio>
          </div>
        </div>
      </div>

      <div className={"flex flex-col items-end p-2 text-primary2/10"}>
        <div>
          {preview?.inner?.id}@{process.env.npm_package_version}
        </div>
        {/*<div></div>*/}
      </div>
    </div>
  )
})
CardPreview.displayName = "CardPreview"
