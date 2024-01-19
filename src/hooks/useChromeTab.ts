import { useEffect, useState } from 'react';
import { getChromeCurrentWin, getChromeTabs } from '~api/chrome';

export default function useChromeTab() {
  const [tabs, setTabs] = useState([] as chrome.tabs.Tab[])

  const init = async () => {
    const windowId = await getChromeCurrentWin()
    const tabs = await getChromeTabs(windowId)
    setTabs(tabs)
  }

  useEffect(() => {
    init();
  }, [])

  return [tabs]
}