import random from "lodash-es/random.js";
import range from "lodash-es/range.js";

import { sleep } from "@cs-magic/common/dist/datetime/utils.js";
import { env } from "@cs-magic/common/dist/env/index.js";
import logger from "@cs-magic/common/dist/log/index.js";
import { IUserSummaryFilled } from "@cs-magic/common/dist/schema/user.summary.js";
import { BaseSimulator } from "@cs-magic/common/dist/spider/base-simulator.js";

const simulator = new BaseSimulator("playwright", {
  headless: false,
});

/**
 * single page 是会有问题的
 * @param url
 * @param user
 */
export const link2card = async ({
  url,
  user,
}: {
  url: string;
  user: IUserSummaryFilled;
}) => {
  logger.info(`[${user.name}] opening browser`);
  await simulator.initBrowserSafe();

  logger.info(`[${user.name}] new page`);
  const urlToVisit = `${env.NEXT_PUBLIC_APP_URL}/card/gen`;
  const page = await simulator.initPageSafe(urlToVisit);

  logger.info(`[${user.name}] filling`);
  await page.locator("#card-input-url").fill(url);
  await page.locator("#card-user-name").fill(user.name);
  if (user.image) await page.locator("#card-user-avatar").fill(user.image);

  logger.info(`[${user.name}] sleeping`);
  await sleep(random() * 5e3);

  logger.info(`[${user.name}] validating`);
  const userName = await page.locator("#card-user-name").inputValue();
  console.log({ target: user.name, real: userName });
  // const buffer = await page.screenshot()
  // await fs.promises.writeFile(`${user.name}.jpg`, buffer, {
  //   encoding: "binary",
  // })

  logger.info(`[${user.name}] resetting`);
  await page.locator("#reset-card").click();
  logger.info(`[${user.name}] reset`);
};

const main = async () => {
  await Promise.all(
    range(5).map((i) =>
      link2card({
        url: "https://mp.weixin.qq.com/s/PewhszexWyjEoAfYpU7XvQ",
        user: {
          name: i.toString(),
          image:
            "http://gips0.baidu.com/it/u=3602773692,1512483864&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280",
        },
      }),
    ),
  );

  await simulator.cleanup();
};

void main();
