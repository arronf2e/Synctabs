import { Avatar, Box, Button, Card, Flex, Text, Theme } from "@radix-ui/themes"
import { useEffect, useState } from "react"

import "@radix-ui/themes/styles.css"
import "~base.css"
import "~style.css"

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
    <Theme>
      {tabs.map((tab) => (
        <Card key={tab.id} style={{ maxWidth: 240 }}>
          <Flex gap="3" align="center">
            <Avatar size="3" src={tab.favIconUrl} radius="full" fallback="T" />
            <Box>
              <Text as="div" size="2" weight="bold">
                {tab.title}
              </Text>
              <Text as="div" size="2" color="gray">
                {tab.url}
              </Text>
            </Box>
          </Flex>
        </Card>
      ))}
    </Theme>
  )
}

export default IndexSidePanel
