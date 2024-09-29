"use client";

import { useAtom, useAtomValue } from "jotai";
import { useRef } from "react";

import {
  Action2Type,
  GenCardApproach,
  ICardPreview,
} from "@cs-magic/assistant-backend/schema/card";
import { PreviewCardAction } from "@/components/card-action-preview";
import { cardRenderedAtom } from "@/store/card.rendered.atom";
import { cardUserAtom } from "@/store/card.user.atom";

import { CardPreview } from "./card-preview";

export const CardPreviewContainer = ({
  preview,
  genCardApproach,
  withActions,
}: {
  preview?: ICardPreview | null;
  genCardApproach?: GenCardApproach;
  withActions?: boolean;
}) => {
  const obj = useRef<HTMLDivElement>(null);
  const [rendered] = useAtom(cardRenderedAtom);
  const user = useAtomValue(cardUserAtom);

  // console.log("-- preview: ", { rendered })

  const Action = ({ type }: { type: Action2Type }) => (
    <PreviewCardAction type={type} obj={obj} rendered={rendered} />
  );

  return (
    <div className={"flex w-full max-w-[375px] flex-col gap-2"}>
      {withActions && (
        <div className={"flex gap-2"}>
          <Action type={"copy"} />
          <Action type={"download"} />
          <Action type={"upload"} />
        </div>
      )}

      <CardPreview user={user} preview={preview} ref={obj} />

      {/*<div ref={obj} id={"card-preview"} className={"card-bg w-full font-card"}>*/}
      {/*  <CardHeader user={user} />*/}

      {/*  <CardContent innerPreview={preview?.inner} />*/}

      {/*  <CardFooter outPreview={preview?.outer} />*/}
      {/*</div>*/}
    </div>
  );
};
