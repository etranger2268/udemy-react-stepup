import type { TodoType } from '@/types/todo';

const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <li key={todo.id} className="border-b border-gray-300 py-1 px-2">
      {todo.id}. {todo.title} - userId: {todo.userId}
    </li>
  );
};

export default Todo;
