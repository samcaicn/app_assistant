import { SwotLogoWhite } from "@cs-magic/swot-frontend-common/components/assets";
import { FlexContainer } from "@cs-magic/react/components/flex-container";
import BackgroundLines from "@cs-magic/react/components/背景条纹动画/components/background-lines";
import { Button } from "@cs-magic/shadcn/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    // <BackgroundLines>
    <FlexContainer orientation={"vertical"} className={"!gap-8 h-full"}>
      <div className={"grid grid-cols-[10] grid-rows-[120]"} />
      <h2 className={"text-[64px] gradient-1"}>Your AI Knowledge Companion</h2>
      <div
        className={
          "text-[24px] text-center w-full sm:w-[1080px] text-[rgb(161,161,161)]"
        }
      >
        <p>
          Neurora empowers{" "}
          <Link
            href={"https://www.youtube.com/watch?v=5sMBhDv4sik"}
            className={"underline"}
          >
            thinkers
          </Link>{" "}
          with smart{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/Personal_knowledge_management"}
            className={"underline"}
          >
            PKM
          </Link>{" "}
          tools,
          <br /> turning scattered pieces into brilliant insights.
        </p>
      </div>

      <div>
        <Button className={"py-6 px-8 text-2xl rounded-2xl"}>
          Join Waitlist
        </Button>
      </div>

      <Image src={SwotLogoWhite} alt={"swot"} width={256} height={256} />

      {/*<div className={"bg-indigo-500 w-full h-20"} />*/}
    </FlexContainer>
    // </BackgroundLines>
  );
}
