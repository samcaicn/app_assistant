"use client"

import Image from "next/image"

import { FlexContainer } from "@/packages_frontend/react/src/components/flex-container"
import bp01 from "@/飞脑BP/飞脑BP.001.png"
import bp10 from "@/飞脑BP/飞脑BP.010.png"
import bp11 from "@/飞脑BP/飞脑BP.011.png"

export default function HomePAge() {
  return (
    <FlexContainer className={"justify-start"} orientation={"vertical"}>
      <Image src={bp01.src} alt={"bp01"} width={1080} height={720} className={"w-full h-auto"} />
      <Image src={bp10.src} alt={"bp01"} width={1080} height={720} className={"w-full h-auto"} />
      <Image src={bp11.src} alt={"bp01"} width={1080} height={720} className={"w-full h-auto"} />
    </FlexContainer>
  )
}
