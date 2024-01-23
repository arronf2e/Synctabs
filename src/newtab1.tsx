import { useState } from "react"

// 新选项卡页面覆盖默认选项卡，通常是浏览器问候用户的方式。需要在 pakcage.json 中配置
// "permissions": [
//   "tabs"
// ]
function IndexNewtab() {
  const [data, setData] = useState("")
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
    </div>
  )
}

export default IndexNewtab