'use client'

/**
 * 任務管理應用程式的主要元件
 * 實現了新增任務的功能和任務列表的顯示
 * 
 * 功能特點：
 * 1. 使用 React hooks 進行狀態管理
 * 2. 實現任務的新增功能
 * 3. 整合 TaskList 元件顯示任務
 * 4. 使用 Tailwind CSS 進行樣式設計
 */

import Image from "next/image"; // 導入 Next.js 的圖片元件
import {useState} from "react"; // 導入 React 的 useState hook 用於狀態管理
import TaskList from "../components/TaskList"; // 導入自定義的 TaskList 元件

export default function Home() {
  // === 狀態管理 ===
  const [tasks,setTasks]=useState([]); // 建立 tasks 狀態陣列，用於儲存所有任務
  const [newTask, setNewTask]=useState(''); // 建立 newTask 狀態，用於管理輸入框的值

  // === 事件處理函數 ===
  const addTask=()=>
  {
    if (newTask.trim() !== '') { // 確保任務不是空白的
      console.log("Before",tasks); // 在控制台顯示當前的任務列表
      console.log("NewTask",newTask); // 在控制台顯示將要添加的新任務
      
      const updatedTasks=[...tasks, newTask.trim()] // 將新任務添加到現有任務列表的末尾
      setTasks(updatedTasks); // 更新 tasks 狀態，觸發重新渲染
      console.log("After:",updatedTasks); // 在控制台顯示更新後的任務列表
      
      setNewTask(''); // 清空輸入框，重置 newTask 狀態
    }
  };

  return (
    <main className="p-10"> {/* 主要內容區域 */}
      <h1 className="text-2xl font-bold mb-6">任務管理系統</h1>

      <div className="flex gap-4 mb-8"> {/* 輸入區域 */}
        <input
          className="border rounded p-2 flex-1"
          placeholder="請輸入新任務"
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()} // 添加按Enter鍵提交功能
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addTask}
        >
          新增任務
        </button>
      </div>

      <TaskList tasks={tasks}/> {/* 任務列表區域 */}
    </main>
  );
}
