import { FaceIcon } from "@radix-ui/react-icons"
import { Box, Grid, Theme } from "@radix-ui/themes"
import { useEffect, useMemo, useState } from "react"

import PopupGroupCard from "~components/PopupGroupCard"
import SearchTab from "~components/SearchTab"
import useChromeTab from "~hooks/useChromeTab"
import useChromeTabGroup from "~hooks/useChromeTabGroup"

import "@radix-ui/themes/styles.css"
import "~base.css"
import "~style.css"

import { getChromeCurrentWin } from "~api/chrome"
import PopupWindowTabs from "~components/PopupWindowTabs"
import useChromeWindow from "~hooks/useChromeWindow"

function IndexPopup() {
  const [currentWindow, setCurrentWindow] = useState(0)
  const [activeWindow, setActiveWindow] = useState(0)
  const [groups] = useChromeTabGroup(currentWindow)
  const [tabs] = useChromeTab(currentWindow)
  const [windows] = useChromeWindow()
  const [queryContent, setQueryContent] = useState("")

  const getCurrentWin = async () => {
    const id = await getChromeCurrentWin()
    setCurrentWindow(id)
    if(!activeWindow) {
      setActiveWindow(id)
    }
  }

  const handleTabChange = (windowId) => {
    setCurrentWindow(windowId)
  }

  useEffect(() => {
    getCurrentWin()
  }, [])

  const displayTabs = useMemo(() => {
    if (queryContent.trim() === "") {
      return tabs
    } else {
      return tabs.filter((tab) => {
        const content = queryContent.toLowerCase()
        return (
          tab.title.toLowerCase().includes(content) ||
          tab.url.toLowerCase().includes(content)
        )
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
        <PopupWindowTabs
          onTabChange={handleTabChange}
          windows={windows}
          currentWindow={currentWindow + ""}
        />
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
                title: "Other"
              }
            ]?.map((group) => {
              const showTabs = displayTabs.filter(
                (tab) => tab.groupId === group.id
              )
              if (showTabs.length === 0) {
                return null
              }
              return (
                <PopupGroupCard activeWindow={activeWindow} key={group.id} group={group} tabs={showTabs} />
              )
            })}
          </Grid>
        </Box>
      </div>
    </Theme>
  )
}

export default IndexPopup
