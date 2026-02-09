import type { TodoType } from '@/types/todo';

const Todo = ({ todo }: { todo: TodoType }) => {
  const mark = todo.completed ? '✓' : '☐';
  const index = String(todo.id).padStart(3, '0');
  return (
    <li key={todo.id} className="border-b border-gray-300 py-1 px-2">
      {index}. {mark} {todo.title} - userId: {todo.userId}
    </li>
  );
};

export default Todo;
