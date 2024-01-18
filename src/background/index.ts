export {}

console.log(
  "Live now; make now always the most precious time. Now will never come again."
)

// chrome.tabGroups.query({
//   collapsed: true,
// }, result => {
//   console.log(result, 'result')
// })

chrome.action.onClicked.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
})
