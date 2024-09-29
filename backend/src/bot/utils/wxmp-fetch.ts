"use server";

import { prisma } from "@cs-magic/common/dist/db/prisma.js";
import logger from "@cs-magic/common/dist/log/index.js";
import { cardDetailSchema } from "@cs-magic/common/dist/schema/card.detail.js";
import { formatString } from "@cs-magic/common/dist/utils/index.js";

import {
  FetchWxmpArticleRes,
  GenWxmpArticleCardFetchOptions,
} from "../../schema/wxmp-article.js";

import { parseWxmpArticleUrl } from "./parse-wxmp-article-url.js";
import { md2summary } from "./wxmp-article/fetch/md2summary.js";
import { wxmpRequest } from "./wxmp-request.js";

export const fetchWxmpArticle = async (
  url: string,
  options?: GenWxmpArticleCardFetchOptions,
): Promise<FetchWxmpArticleRes> => {
  if (options?.detail?.request?.backendType === "fastapi")
    throw new Error("fastapi backend is currently unsupported out of design");

  const data = parseWxmpArticleUrl(url);

  let article = await prisma.card.findFirst({
    where: {
      platformType: "wxmpArticle",
      OR: [
        {
          platformId: data.platformId ?? "",
        },
        {
          // json filter, ref: https://www.prisma.io/docs/orm/prisma-client/special-fields-and-types/working-with-json-fields#filter-on-nested-object-property
          platformData: {
            path: ["sn"],
            equals: data.platformData.sn ?? "",
          },
        },
      ],
    },
    ...cardDetailSchema,
  });

  if (!article) {
    article = await prisma.card.create({
      data: await wxmpRequest(url, options?.detail?.request),
    });
  }

  logger.debug(`-- article: ${formatString(JSON.stringify(article), 120)}`);

  const model = options?.detail?.summary?.model ?? "gpt-3.5-turbo";

  // console.log({ found })
  let llmResponse = await prisma.llmResponse.findFirst({
    where: {
      cardId: article.id,
      response: {
        path: ["options", "model"],
        equals: model,
      },
    },
  });
  if (!llmResponse) {
    const response = await md2summary(
      article.contentMd!,
      options?.detail?.summary,
      // todo: add summaryOptions with user
    );
    llmResponse = await prisma.llmResponse.create({
      data: {
        // use query id as the storage id
        id: response.query.id,
        cardId: article.id,
        response: JSON.stringify(response),
      },
    });
  }

  logger.debug(
    `-- llmResponse: ${formatString(JSON.stringify(llmResponse), 120)}`,
  );

  return {
    article,
    llmResponse,
  };
};
