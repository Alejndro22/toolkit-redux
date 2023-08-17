import { useGetTodosQuery } from './store/apis/todos/todosAPI';

export const ToDoApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>Todos - RTKQuery</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

      <pre>...</pre>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE: ' : 'Pending: '}</strong>
            {todo.title}
          </li>
        ))}
      </ul>

      <button>Next To Do</button>
    </>
  );
};
