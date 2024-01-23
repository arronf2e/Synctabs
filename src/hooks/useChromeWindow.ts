import { useEffect, useState } from 'react';
import { getChromeWindows } from '~api/chrome';

export default function useChromeTab() {
  const [windows, setWindows] = useState<chrome.windows.Window[]>([])

  const init = async () => {
    const windows = await getChromeWindows()
    setWindows(windows)
  }

  useEffect(() => {
    init();
  }, [])

  return [windows]
}