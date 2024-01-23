import { useEffect, useState } from 'react';
import { getChromeTabs } from '~api/chrome';

export default function useChromeTab(windowId) {
  const [tabs, setTabs] = useState<chrome.tabs.Tab[]>([])
  const init = async () => {
    const tabs = await getChromeTabs(windowId)
    setTabs(tabs)
  }

  useEffect(() => {
    init();
  }, [windowId])

  return [tabs]
}