export {}

console.log(
  "Live now; make now always the most precious time. Now will never come again."
)

chrome.tabs.onCreated.addListener(function(tab) {
  updateBadgeText();
});

// 监听标签页关闭事件
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
  updateBadgeText();
});

// 更新徽章数据的字
function updateBadgeText() {
  chrome.tabs.query({}, function(tabs) {
    const tabCount = tabs.length;
    chrome.action.setBadgeText({ text: tabCount.toString() });
  });
}
