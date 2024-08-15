import { NotImplementedError } from "@cs-magic/common/dist/schema/error.js"
import { extractFirstUrl } from "@cs-magic/common/dist/utils/extract-first-url.js"
import { isWxmpArticleUrl } from "@cs-magic/common/dist/utils/is-wxmp-article-url.js"
import { wxmpUrl2preview } from "@cs-magic/swot-backend/dist/bot/utils/wxmp-url2preview.js"
import {
  GenWxmpArticleCardFetchOptions,
  ICardInnerPreview,
} from "@cs-magic/swot-backend/schema"

/**
 * 从用户输入的 url 中返回解析出的结构
 * @param inputUrlLike
 * @param options
 */
export const genCardFromUrl = async (
  inputUrlLike: string,
  options?: GenWxmpArticleCardFetchOptions,
): Promise<ICardInnerPreview> => {
  const urlParsed = extractFirstUrl(inputUrlLike)
  console.info("-- genCardFromUrl: %o", { inputUrlLike, urlParsed })
  if (!urlParsed)
    throw new Error(`invalid url to be parsed from ${inputUrlLike}`)

  if (isWxmpArticleUrl(urlParsed))
    return await wxmpUrl2preview(urlParsed, options)

  // todo: other platforms
  // if (/xhslink|xiaohongshu/.test(urlParsed)) {
  //   const data = await fetchXiaoHongShuDetail(urlParsed);
  //   if (!data)
  //     throw new Error(
  //       `failed to fetch xiaohongshu detail from url ${urlParsed}, please try again`,
  //     );
  //
  //   return xiaohongshu2card(data);
  // }
  //
  // if (/bilibili|b23.tv/.test(urlParsed)) {
  //   let bvid: string | null;
  //   if (/bilibili/.test(urlParsed)) bvid = getBvidFromUrl(urlParsed);
  //   else bvid = (await fetchBvidFromb23tv(urlParsed)).data ?? null;
  //
  //   if (!bvid)
  //     throw new Error(`invalid bilibili url to be parsed from ${urlParsed}`);
  //
  //   const resDetail = await fetchBilibiliDetail(bvid);
  //   if (!resDetail.success) throw new Error(resDetail.message);
  //
  //   return bilibili2card(resDetail.data);
  // }

  throw new NotImplementedError()
}
