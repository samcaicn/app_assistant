import { SwotLogoWhite } from "@/components/assets";
import { FlexContainer } from "@/packages_frontend/react/dist/components/flex-container";
import { Button } from "@/packages_frontend/shadcn/dist/ui/button";
// import { Image } from "lucide-react"
import Image from "next/image";

export default function HomePage() {
  return (
    <FlexContainer orientation={"vertical"}>
      <div className={"grid grid-cols-[10] grid-rows-[120]"} />
      <h2 className={"text-[96px] gradient-1"}>Make Your Mind Great</h2>
      <p
        className={
          "text-[24px] text-center w-full sm:w-[720px] text-[rgb(161,161,161)]"
        }
      >
        SWOT is the new-gen AI-Native solution of helping users archive and
        digest the daily info, powered by RSS + RPA + LLM.
      </p>

      <div>
        <Button className={"py-6 px-8 text-2xl rounded-2xl"}>Kick Start</Button>
      </div>

      <Image src={SwotLogoWhite} alt={"swot"} width={256} height={256} />
    </FlexContainer>
  );
}
