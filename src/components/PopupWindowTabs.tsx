import { Tabs } from "@radix-ui/themes"

interface PopupWindowTabsProps {
  windows: chrome.windows.Window[];
  currentWindow: string;
  onTabChange: (windowId: number) => void;
}

export default function PopupWindowTabs({
  windows,
  currentWindow,
  onTabChange
}: PopupWindowTabsProps) {
  if (currentWindow === '0') {
    return null
  }
  return (
    <Tabs.Root
      mb="2"
      onValueChange={(value) => onTabChange(+value)}
      defaultValue={currentWindow}>
      <Tabs.List>
        {windows.map((window, index) => (
          <Tabs.Trigger value={window.id + ""} key={window.id}>
            win-{window.id}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
