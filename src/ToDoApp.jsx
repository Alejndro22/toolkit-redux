import { useState } from 'react';
import {
  useGetTodoByIdQuery,
  // useGetTodosQuery
} from './store/apis/todos/todosAPI';

export const ToDoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo = [], isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId((value) => value + 1);
  };

  const prevTodo = () => {
    if (todoId <= 1) return;
    setTodoId((value) => value - 1);
  };

  return (
    <>
      <h1>Todos - RTKQuery</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev To Do</button>

      <button onClick={nextTodo}>Next To Do</button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE: ' : 'Pending: '}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
