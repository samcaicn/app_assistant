# CS魔法社 - 飞脑

[//]: # (![SWOT Logo]&#40;packages/swot-frontend/src/assets/branding/enterprise/swot.png&#41;)

## Project Overview

```mermaid
graph LR;
    subgraph general
        prisma --> common & llm;
        common --> llm;
    end
    
    subgraph wechaty_eco
        wechat4u --> wechaty-puppet-wechat4u;
        wechaty-puppet --> wechaty-puppet-wechat4u & wechaty;
        wechaty-puppet-wechat4u --> wechaty;
    end
    
    subgraph frontend_common_eco
        general --> react;
        react --> frontend_common;
        assets --> frontend_common;
    end
    
    subgraph cs-magic_frontend_eco
        frontend_common --> cs-magic_frontend;
    end
    
    subgraph swot_backend_eco
        general --> swot_backend;
        wechaty_eco --> swot_backend;
    end
    
    subgraph swot_frontend_eco
        frontend_common_eco --> swot_frontend;
        swot_backend_eco --> swot_frontend;
        swot_frontend --> swot-web & swot-pc;
    end
```

## Run

```shell
# start web in dev
yarn workspace @cs-magic/swot-backend dev & yarn workspace @cs-magic/swot-web dev

# start pc in dev
yarn workspace swot-pc dev

# build backend
yarn workspace @cs-magic/swot-backend build

# build web
yarn workspace @cs-magic/swot-frontend build

# build pc
yarn workspace swot-pc build:mac

# start web after build
yarn workspace @cs-magic/swot-frontend start

# start pc after build
# double click to install: packages/swot-pc/dist/swot-pc-${version}.dmg
```


## todo: logic on generate card

```shell
[//]: # (```mermaid)
subgraph backend

[bot]
link2card@app_swot/backend/src/bot/handlers/handle-message/plugins/parser.plugin.ts

[simulator]
app_swot/frontend-web/src/app/(home)/card/gen/page.tsx
packages_frontend/common/src/components/card.tsx:Card (js)
packages_frontend/common/src/components/card-input-frontend.tsx:CardInputFrontend
packages_frontend/common/src/components/card-action-input.tsx:InputCardAction
packages_frontend/common/src/utils/gen-card.ts:genCardFromUrl
app_swot/backend/src/bot/utils/wxmp-fetch.ts:fetchWxmpArticle
app_swot/backend/src/bot/utils/wxmp-article/fetch/md2summary.ts:md2summary
packages/llm/src/utils/safe-call-agent.ts:safeCallAgent
packages/llm/src/utils/load-agent.ts:loadAgent

[//]: # (```)

```
