import { useEffect, useState } from "react"

import "./style.css"

// 侧板允许扩展在侧板中显示自己的UI，从而实现补充用户浏览旅程的持久体验。
// "permissions": [
//   "sidePanel"
// ]
// 文档：https://developer.chrome.com/docs/extensions/reference/api/sidePanel?hl=zh-cn
function IndexSidePanel() {

  const [tabs, setTabs] = useState([] as chrome.tabs.Tab[])

  useEffect(() => {
    // 获取所有标题页
    chrome.tabs.query({}, function (tabs) {
      console.log(tabs)
      setTabs(tabs)
    })
    // 获取所有分组
    chrome.tabGroups.query({}, function (tabGroups) {
      console.log(tabGroups)
    })
  }, [])

  return (
    <div>
      {
        tabs.map(tab => (
          <div>
            <h1>{tab.title}</h1>
            <a href={tab.url} target='_blank'>{tab.url}</a>
          </div>
        ))
      }
    </div>
  )
}

export default IndexSidePanel
