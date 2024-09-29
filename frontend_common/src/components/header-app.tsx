import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { MSG_TODO } from "@cs-magic/common/const";
import { AspectRatio } from "@cs-magic/shadcn/ui/aspect-ratio";

export interface ISubAppIcon {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  Cover?: string | React.VFC<React.SVGProps<SVGSVGElement>>;
  title: string;
  enabled?: boolean;
}

export const SubAppIcon = ({ subAppIcon }: { subAppIcon: ISubAppIcon }) => {
  const { Cover, enabled } = subAppIcon;
  return (
    <Link
      href={`/${subAppIcon.id}`}
      className={
        "interactive flex w-24 flex-col items-center gap-1 rounded-lg p-2"
      }
      onClick={(event) => {
        if (!enabled) {
          event.preventDefault();
          toast.info(MSG_TODO);
        }
      }}
    >
      {/*<Text2TextApp className={"w-24 h-24"} />*/}
      <AspectRatio ratio={1}>
        {!Cover || typeof Cover === "string" ? (
          <Image
            src={Cover ?? ""}
            alt={""}
            fill
            className={"rounded-lg object-cover"}
          />
        ) : (
          <Cover className={"object-cover"} />
        )}
      </AspectRatio>

      <div className={"text-sm"}>{subAppIcon.title}</div>
    </Link>
  );
};
