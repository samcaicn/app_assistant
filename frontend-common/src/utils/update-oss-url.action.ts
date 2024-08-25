"use server"

import { prisma } from "@cs-magic/common/dist/db/prisma"
import { ICardLlmResponse, cardLlmResponseSchema } from "@cs-magic/common/dist/schema/card.detail"

export const updateOssUrl = async (llmResponseId: string, ossUrl: string): Promise<ICardLlmResponse> => {
  console.log("-- updateOssUrl: ", { llmResponseId, ossUrl })

  return prisma.llmResponse.update({
    where: {
      id: llmResponseId,
    },
    data: {
      ossUrl,
    },
    ...cardLlmResponseSchema,
  })
}
