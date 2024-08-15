import { SummaryOptions } from "@cs-magic/swot-backend/schema"
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { LlmModelType } from "@cs-magic/llm"

export const cardLlmEnabledAtom = atomWithStorage<boolean>(
  "card.llm.enabled",
  true,
)
export const cardLlmModelTypeAtom = atomWithStorage<LlmModelType>(
  "card.summary.model",
  "gpt-3.5-turbo", // gpt-3.5-turbo
)
export const cardSummaryWithImageAtom = atomWithStorage<boolean>(
  "card.summary.with-image",
  false,
)

export const cardSummaryOptionsAtom = atom<SummaryOptions>((get) => ({
  model: get(cardLlmModelTypeAtom),
  enabled: get(cardLlmEnabledAtom),
  withImage: get(cardSummaryWithImageAtom),
}))
