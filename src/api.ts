// api.ts
import { Task } from "./types"; // 追加

const API_URL = 'https://your-app-name.vercel.app/tasks';

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`${API_URL}/tasks`, {
    cache: 'no-store', // SSR
  });
  const todos = await res.json();

  return todos;
};

export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`${API_URL}/tasks`, {
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
