import {
  Avatar,
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Separator,
  Text,
  Theme
} from "@radix-ui/themes"
import { useEffect, useMemo, useState } from "react"

import "@radix-ui/themes/styles.css"
import "~base.css"
import "~style.css"

import { FaceIcon } from "@radix-ui/react-icons"

import PopupGroupCard from "~components/PopupGroupCard"
import SearchTab from "~components/SearchTab"
import useChromeTab from "~hooks/useChromeTab"
import useChromeTabGroup from "~hooks/useChromeTabGroup"

function IndexPopup() {
  const [groups] = useChromeTabGroup()
  const [tabs] = useChromeTab()

  const [queryContent, setQueryContent] = useState("")

  useEffect(() => {
    console.log(queryContent, "queryContent")
  }, [queryContent])

  const displayTabs = useMemo(() => {
    if (queryContent.trim() === "") {
      return tabs
    } else {
      return tabs.filter((tab) => {
        return tab.title.toLowerCase().includes(queryContent.toLowerCase())
      })
    }
  }, [tabs, queryContent])

  return (
    <Theme>
      <div className="popup-container">
        <Box mb="4">
          <Grid columns="2" gap="3" width="auto" align="center">
            <Box>
              <SearchTab search={queryContent} setSearch={setQueryContent} />
            </Box>
            <Box width="8">
              <FaceIcon />
            </Box>
          </Grid>
        </Box>
        <Box>
          <Grid
            columns={groups.length > 2 ? "2" : "1"}
            gap="3"
            width="auto"
            align="start">
            {[
              ...groups,
              {
                id: -1,
                collapsed: false,
                windowId: groups.length > 0 && groups[0].windowId,
                color: "pink",
                title: "未分组"
              }
            ]?.map((group) => (
              <PopupGroupCard
                key={group.id}
                group={group}
                tabs={displayTabs.filter((tab) => tab.groupId === group.id)}
              />
            ))}
          </Grid>
        </Box>
      </div>
    </Theme>
  )
}

export default IndexPopup
