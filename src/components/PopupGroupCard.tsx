import {
  Avatar,
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Separator,
  Text,
  Tooltip
} from "@radix-ui/themes"

interface PopupGroupCardProps {
  group: chrome.tabGroups.TabGroup
  tabs: chrome.tabs.Tab[]
  windowId: number
}

export default function PopupGroupCard({
  group,
  tabs,
  windowId
}: PopupGroupCardProps) {
  const handleChooseTab = (tab: chrome.tabs.Tab) => () => {
    chrome.windows.update(windowId, { focused: true }, (window) => {
      chrome.tabs.update(tab.id, { highlighted: true })
    })
  }

  return (
    <Card key={group.id}>
      <Flex direction="column" gap="3" align="start" justify="start">
        <Box>
          <Badge size="1" color={group.color}>
            {group.title}
          </Badge>
        </Box>
        <Flex direction="column" gap="3" width="100%">
          {tabs.map((tab, index) => (
            <>
              <Flex
                onClick={handleChooseTab(tab)}
                style={{
                  cursor: "pointer"
                }}
                justify="start"
                direction="row"
                gap="3"
                width="100%"
                key={tab.id}>
                <Avatar
                  size="1"
                  src={tab.favIconUrl}
                  fallback={tab.title?.slice(0, 1)}
                />
                <Tooltip
                  style={{
                    maxWidth: 300
                  }}
                  content={tab.title}>
                  <Flex direction="column" gap="1" width="100%">
                    <Text className="truncate" size="2" weight="bold">
                      {tab.active ? (
                        <Badge mr="2" color="orange">
                          Current
                        </Badge>
                      ) : null}
                      {tab.title}
                    </Text>
                    <Text className="truncate" size="1">
                      {tab.url}
                    </Text>
                  </Flex>
                </Tooltip>
              </Flex>
              {index !== tabs.length - 1 ? (
                <Separator orientation="horizontal" size="4" />
              ) : null}
            </>
          ))}
        </Flex>
      </Flex>
    </Card>
  )
}
