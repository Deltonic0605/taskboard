/**
 * TaskList 元件：用於顯示任務列表的子元件
 * 
 * 執行流程：
 * 1. 從父元件 (Home) 接收 tasks 陣列作為 props
 * 2. 使用 map 方法遍歷 tasks 陣列
 * 3. 為每個任務生成一個帶有樣式的列表項目
 */
export default function TaskList({tasks}){ // 使用解構賦值獲取傳入的 tasks 陣列
    return(
        // 創建列表容器
        <ul className="space-y-2"> {/* space-y-2: 設定列表項目之間的垂直間距為 0.5rem */}
            {/* 
              使用 map 方法遍歷任務陣列
              - task: 當前任務的內容
              - index: 當前任務的索引
            */}
            {tasks.map((task,index)=>(
                // 建立單個任務的列表項目
                <li
                    key={index} // 提供唯一的 key 值，幫助 React 進行高效的 DOM 更新
                    className="border p-2 rounded" // 設定樣式：
                                                 // - border: 添加邊框
                                                 // - p-2: 內部間距 0.5rem
                                                 // - rounded: 圓角邊框
                >
                {/* 顯示任務文字內容 */}
                {task}
                </li>
            ))}
        </ul>
    )
}