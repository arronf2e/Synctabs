// 获取所有tab
export const getChromeTabs = (windowId?: number): Promise<chrome.tabs.Tab[]> => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({windowId}, tabs => {
      resolve(tabs)
    })
  })
}

// 获取所有tabGroup
export const getChromeTabGroups = (windowId?: number): Promise<chrome.tabGroups.TabGroup[]> => {
  return new Promise((resolve, reject) => {
    chrome.tabGroups.query({windowId}, tabGroups => {
      resolve(tabGroups)
    })
  })
}

// 获取当前窗口
export const getChromeCurrentWin = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    chrome.windows.getCurrent(win => {
      resolve(win.id)
    })
  })
}

