const express = require('express');
const cors = require('cors');

const app = express();
// APIのベースURL
const API_URL = 'https://your-app-name.vercel.app';


// CORS設定
app.use(cors());

// ダミーのタスクリスト
const tasks = [
  { id: 1, text: 'Task 1' },
  { id: 2, text: 'Task 2' },
  // ... 他のタスク
];

// タスクリスト取得のAPIエンドポイント
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// 他の設定やルートの処理をここに記述

// サーバー起動
app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});
