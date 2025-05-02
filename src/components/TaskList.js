/**
 * TaskList 元件：負責顯示任務列表的子元件
 * 
 * 特點：
 * 1. 接收任務陣列作為 props
 * 2. 使用 map 方法渲染任務列表
 * 3. 為每個任務項目添加樣式
 * 4. 使用唯一的 key 優化渲染性能
 */

export default function TaskList({tasks}){
    return(
        <div className="space-y-4"> {/* 任務列表容器 */}
            {tasks.length === 0 ? (
                // 當沒有任務時顯示提示訊息
                <p className="text-gray-500 text-center">目前沒有任務</p>
            ) : (
                // 任務列表
                <ul className="space-y-2">
                    {tasks.map((task,index)=>(
                        <li
                            key={index}
                            className="border p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            {task}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}