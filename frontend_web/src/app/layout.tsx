import { Footer } from "@cs-magic/react/components/footer";
import { Main } from "@cs-magic/react/components/main";
import BaseLayout from "@cs-magic/react/layouts/base";
import { Navbar } from "@cs-magic/react/components/navbar";
import { cn } from "@cs-magic/shadcn/lib/utils";
import { SwotIcoWhite } from "@cs-magic/swot-frontend-common/components/assets";
import { SwotBanner } from "@cs-magic/swot-frontend-common/components/swot-banner";
import { Metadata, type Viewport } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "飞脑",
  description: "更像真人的AI社交助理",
  icons: [{ rel: "icon", url: SwotIcoWhite.src }],

  // 不加这个会导致微信公众号文章图片无法引用，ref: https://blog.csdn.net/qq_42961150/article/details/121833692#:~:text=%E8%AF%A6%E8%A7%A3%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87%E9%98%B2%E7%9B%97%E9%93%BE,%E6%8E%A5%E5%8F%A3%EF%BC%8C%E8%AE%A9%E6%88%91%E4%BB%AC...
  referrer: "no-referrer",
};

// ref: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#use-viewport-export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(ansiColors.red("== RootLayout =="))

  return (
    <BaseLayout>
      <Navbar productBanner={<SwotBanner />} />

      <Main>{children}</Main>

      <Footer />
    </BaseLayout>
  );
}
