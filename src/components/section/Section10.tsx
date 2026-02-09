import { useState } from 'react';
import Todo from '@/components/Todo';
import type { TodoType } from '@/types/todo';

const Section10 = () => {
  const [todos, setTodos] = useState<TodoType[] | null>(null);
  const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!res.ok) {
      throw new Error('Todos fetch Error');
    }
    const data: TodoType[] = await res.json();
    setTodos(data);
  };

  return (
    <div className="space-y-4">
      <div>
        <button
          type="button"
          className="py-2 px-4 text-sm font-semibold bg-blue-500 text-white rounded-md transition-all duration-300 hover:opacity-75"
          onClick={fetchTodos}
        >
          データ取得
        </button>
      </div>
      <div>
        {Array.isArray(todos) ? (
          <ul className="text-left">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </ul>
        ) : (
          <p>データを取得してください</p>
        )}
      </div>
    </div>
  );
};

export default Section10;
