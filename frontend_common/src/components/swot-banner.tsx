import Image from "next/image";

import { LOGO_SIZE_LG } from "@cs-magic/react/dist/config";

import { SwotLogoWhite } from "./assets";

export const SwotBanner = () => {
  return (
    <div className={"flex items-center gap-2 h-full"}>
      <Image
        width={LOGO_SIZE_LG}
        height={LOGO_SIZE_LG}
        src={SwotLogoWhite}
        alt={"swot-logo"}
        className={"h-auto"}
      />
      <p className={"text-xl font-semibold uppercase"}>Neurora</p>
    </div>
  );
};
