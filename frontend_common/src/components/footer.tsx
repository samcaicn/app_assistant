import Link from "next/link";

import { ImageEqualHeight } from "@cs-magic/react/components/image-equal-height";

import CsMagicBannerSvg from "../../../../assets/branding/CS-magic_banner_方正字汇-锐速体.svg";

export const Footer = () => {
  const enterprises: string[] = [];

  return (
    <div className={"mt-auto flex shrink-0 flex-col items-center gap-2 p-4"}>
      {/*  founders */}
      <div
        className={
          "mt-auto flex h-4 w-full items-center justify-center gap-4 sm:h-8"
        }
      >
        <Link
          href={"https://cs-magic.cn"}
          className={"h-full"}
          target={"_blank"}
        >
          <CsMagicBannerSvg className={"h-full w-auto"} />
        </Link>

        {/*<Link*/}
        {/*  href={"https://waytoagi.com"}*/}
        {/*  className={"h-full"}*/}
        {/*  target={"_blank"}*/}
        {/*>*/}
        {/*  <V2AGIBrand className={"h-full w-auto text-primary"} />*/}
        {/*</Link>*/}

        {enterprises.map((item) => (
          <ImageEqualHeight src={item} key={item} />
        ))}
      </div>
    </div>
  );
};
