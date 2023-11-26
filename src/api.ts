// api.ts の冒頭に追加
import { Task } from './types'; // types.ts や types.d.ts の実際のパスに置き換える

export const addTodo = async (todo: Task): Promise<Task> => {
  console.log("API_URL:", process.env.API_URL); // API_URL の値をログに出力
  const res = await fetch(`${process.env.API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();

  return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTodo = await res.json();

  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Task> => {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  const deletedTodo = await res.json();

  return deletedTodo;
};
