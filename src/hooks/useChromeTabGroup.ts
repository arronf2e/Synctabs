import { useEffect, useState } from 'react';
import { getChromeCurrentWin, getChromeTabGroups } from '~api/chrome';

export default function useChromeTabGroup() {
  const [groups, setGroups] = useState([] as chrome.tabGroups.TabGroup[])

  const initGroups = async () => {
    const windowId = await getChromeCurrentWin()
    const tabGroups = await getChromeTabGroups(windowId)
    setGroups(tabGroups)
  }

  useEffect(() => {
    initGroups();
  }, [])

  return [groups]
}