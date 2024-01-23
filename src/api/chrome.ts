// getAllTab under window
export const getChromeTabs = (windowId?: number): Promise<chrome.tabs.Tab[]> => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({windowId}, tabs => {
      resolve(tabs)
    })
  })
}

// get tabGroup under window
export const getChromeTabGroups = (windowId?: number): Promise<chrome.tabGroups.TabGroup[]> => {
  return new Promise((resolve, reject) => {
    chrome.tabGroups.query({windowId}, tabGroups => {
      resolve(tabGroups)
    })
  })
}

// get current active window
export const getChromeCurrentWin = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    chrome.windows.getCurrent(win => {
      resolve(win.id)
    })
  })
}

// get all windows
export const getChromeWindows = (): Promise<chrome.windows.Window[]> => {
  return new Promise((resolve, reject) => {
    chrome.windows.getAll(wins => {
      resolve(wins)
    })
  })
}