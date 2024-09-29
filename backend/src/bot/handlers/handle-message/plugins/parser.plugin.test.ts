import {
  sampleWxmpArticleUrl,
  sampleWxmpArticleUrls,
} from "@cs-magic/common/dist/sample.js";
import { IUserSummaryFilled } from "@cs-magic/common/dist/schema/user.summary.js";
import { CardSimulator } from "@cs-magic/common/dist/spider/card-simulator.js";

import { wxmpUrl2preview } from "../../../utils/wxmp-url2preview.js";

describe("test parser", () => {
  const parser = new CardSimulator("playwright", { headless: false });
  const user: IUserSummaryFilled = {
    name: "sample",
    image: "",
  };

  const parseUrl = async (url: string) => {
    const { cardUrl } = await parser.genCard(
      JSON.stringify(await wxmpUrl2preview(url)),
      user,
    );
    console.log(cardUrl);
    return cardUrl;
  };

  it("test single url", async () => {
    await parseUrl(sampleWxmpArticleUrl);
  }, 300e3);

  it("test multiple urls", async () => {
    await Promise.all(
      sampleWxmpArticleUrls.slice(0).map(async (url) => {
        await parseUrl(url);
      }),
    );
  }, 300e3);
});
