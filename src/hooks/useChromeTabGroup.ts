import { useEffect, useState } from 'react';
import { getChromeTabGroups } from '~api/chrome';

export default function useChromeTabGroup(windowId) {
  const [groups, setGroups] = useState<chrome.tabGroups.TabGroup[]>([])
  const initGroups = async () => {
    const tabGroups = await getChromeTabGroups(windowId)
    setGroups(tabGroups)
  }
  useEffect(() => {
    initGroups();
  }, [windowId])

  return [groups]
}