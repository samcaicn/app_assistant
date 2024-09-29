"use client";

import { useAtom, useSetAtom } from "jotai";
import { IPureNode } from "markmap-common";
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";
import { useEffect, useRef, useState } from "react";
import React from "react";

import {
  mapLevelsMaxAtom,
  mapSpacingVerticalAtom,
} from "@cs-magic/react/store/visualization.atom";
import { AspectRatio } from "@cs-magic/shadcn/ui/aspect-ratio";

import { cardMindmapRenderedAtom } from "../store/card.rendered.atom";

const transformer = new Transformer();

export default function MarkMap({ content }: { content?: string }) {
  const refSvg = useRef<SVGSVGElement>(null);
  const refMm = useRef<Markmap>();

  // 不能设置 ratio 为 0，否则会导致 svg 渲染算法出错
  const [ratio, setRatio] = useState(1);
  const setCardMindmapRendered = useSetAtom(cardMindmapRenderedAtom);
  const [spacingVertical] = useAtom(mapSpacingVerticalAtom);
  const [maxLevels] = useAtom(mapLevelsMaxAtom);

  useEffect(() => {
    if (!refSvg.current || !content) return;

    const mm = Markmap.create(refSvg.current, {
      pan: false,
      spacingVertical,
      spacingHorizontal: 50,
      zoom: false,
      maxWidth: 250, // 300大概一行20个字这样子
      duration: 0, // 这样就不用检测动画了
      autoFit: false,

      color: () => `hsl(190 85% 19% / .3)`,
      // initialExpandLevel: 3,
    });
    refMm.current = mm;

    const { root } = transformer.transform(content, {});

    // 去掉首结点的内容
    root.content = "";

    // // 去掉第三层即以下的结点
    const dropLevel = (item: IPureNode, level: number) => {
      if (level >= maxLevels) {
        item.children = [];
      } else {
        item.children.forEach((item) => {
          dropLevel(item, level + 1);
        });
      }
    };
    dropLevel(root, 1);

    mm.setData(root);
    mm.state.minY = 20; // 首结点紧贴边缘

    // ref: https://github.com/markmap/markmap/issues/134#issuecomment-1267967814
    const { maxY, maxX, minX, minY } = mm.state;
    const w = maxY - minY;
    const h = maxX - minX;
    const ratio = w / h;
    setRatio(ratio);

    return () => {
      mm.destroy();
    };
  }, [spacingVertical, content]);

  /**
   * 当填充数据，并且初始化了ratio之后，才要 fit
   */
  useEffect(() => {
    if (content) {
      setCardMindmapRendered(false);
      void refMm.current?.fit().then(() => {
        setCardMindmapRendered(true);
      });
    }
  }, [ratio, content]);

  return (
    <div className={"w-full"}>
      <AspectRatio ratio={ratio}>
        <svg className="w-full h-full !font-songti" ref={refSvg} />
      </AspectRatio>
    </div>
  );

  // console.info("-- markmap: %o", { content, ratio, state: refMm.current?.state })
}
