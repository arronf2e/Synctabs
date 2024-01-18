import { useState } from "react"

// 侧板允许扩展在侧板中显示自己的UI，从而实现补充用户浏览旅程的持久体验。
// "permissions": [
//   "sidePanel"
// ]
// 文档：https://developer.chrome.com/docs/extensions/reference/api/sidePanel?hl=zh-cn
function IndexSidePanel() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>
        Welcome to your
        <a href="https://www.plasmo.com" target="_blank">
          {" "}
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexSidePanel