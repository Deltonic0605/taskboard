'use client' // 宣告這是客戶端元件，表示這個檔案的程式碼會在瀏覽器端執行，而不是伺服器端

// 導入必要的模組和元件
import Image from "next/image"; // 導入 Next.js 的圖片元件，用於優化圖片載入（目前未使用）
import {useState} from "react"; // 導入 React 的 useState hook，用於管理元件的狀態
import TaskList from "../components/TaskList"; // 導入自定義的 TaskList 元件，用於顯示任務列表

// 定義主頁面元件
export default function Home() {
  // === 狀態管理 ===
  // 使用 useState hook 創建並管理狀態
  const [tasks,setTasks]=useState([]); // 建立 tasks 狀態陣列，用於儲存所有任務
                                      // 初始值為空陣列，setTasks 用於更新任務列表
  
  const [newTask, setNewTask]=useState(''); // 建立 newTask 狀態，用於管理輸入框的值
                                           // 初始值為空字串，setNewTask 用於更新輸入值

  // === 事件處理函數 ===
  // 處理添加新任務的邏輯
  const addTask=()=>
  {
    // 開發時的除錯信息，顯示任務添加前的狀態
    console.log("Before",tasks); // 在控制台顯示當前的任務列表
    console.log("NewTask",newTask); // 在控制台顯示將要添加的新任務
    
    // 使用展開運算符(...) 創建新的任務陣列，保持狀態的不可變性
    const updatedTasks=[...tasks, newTask] // 將新任務添加到現有任務列表的末尾
    
    setTasks(updatedTasks); // 更新 tasks 狀態，觸發重新渲染
    console.log("After:",updatedTasks); // 在控制台顯示更新後的任務列表
    
    setNewTask(''); // 清空輸入框，重置 newTask 狀態
  };

  // === 渲染用戶界面 ===
  return (
    // 主要內容區域容器
    <main className="p-10"> {/* 使用 Tailwind CSS 添加內邊距 */}
      {/* 標題區域 */}
      <h1 className="text-2xl font-bold">Task board</h1>

        {/* 輸入區域 */}
        <div className="flex gap-10 mb-20"> {/* 使用 flex 佈局，設定間距和下邊距 */}
          {/* 任務輸入框 */}
          <input
           className="border p-10 flex-5" // 設定邊框和內邊距
           placeholder="Enter a task" // 輸入框的提示文字
           value={newTask} // 綁定到 newTask 狀態
           onChange={(e)=>setNewTask(e.target.value)} // 當輸入內容改變時更新 newTask 狀態
           />
           {/* 添加任務按鈕 */}
           <button
            className="bg-blue-500 text-white px-10" // 設定按鈕的背景色、文字顏色和內邊距
            onClick={addTask} // 點擊按鈕時觸發 addTask 函數
           >
            ADD
           </button>
        </div>

        {/* 任務列表區域 */}
        <TaskList tasks={tasks}/> {/* 渲染 TaskList 元件，將 tasks 陣列作為 props 傳遞 */}
    </main>
  );
}
