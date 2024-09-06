import { useState } from 'react'
import ConnectionPage from '@cs-magic/swot-frontend-common/pages/connection/page'

import { default as swotLogo } from '@/branding/swot/swot_logo_white.png'

export default function HomePage() {
  const [versions] = useState(window.electron.process.versions)

  return (
    <div className={'w-screen h-screen overflow-hidden flex flex-col items-center p-4 gap-4'}>
      <img src={swotLogo} className={'w-32 h-32 logo mt-8'} />

      <div className="text">
        <span className="gradient-1">飞脑</span>：一款更像真人的
        <span className="gradient-2">AI社交助理</span>
      </div>

      <div className={'grow overflow-hidden w-full'}>
        <ConnectionPage />
      </div>

      <div className={'flex items-center flex-col gap-4 p-4 mt-auto'}>
        {/*<p className="tip">*/}
        {/*  <code>V0.4.0</code> 支持你本地化地登录<span>Web端</span>微信，并导出自己的通讯录*/}
        {/*</p>*/}

        <div className="creator !text-xs">
          Powered by electron-vite (Electron v{versions.electron}, Chromium v{versions.chrome}, Node
          v{versions.node})
        </div>
      </div>
    </div>
  )
}
