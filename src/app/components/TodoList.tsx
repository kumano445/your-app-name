import { Task } from "@/types";
import React, { useEffect } from "react";
import Todo from "./Todo";

interface TodosLIstProps {
  todos : Task[];
}

const TodoList = ({ todos }: TodosLIstProps) =>{
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
      ))}
    </ul>
  );
};

export default TodoList;
