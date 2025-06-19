
const TodoList = ({ todo, onDelet, onToggle }) => {
  if (todo.length === 0) {
    return <p className="todoNolist">할 일이 없습니다</p>
  }
  return (
    <div className="todo">
      <ul className="todoform">
        {
          todo.map((item) => {
            return (
              <li
                className="todolist"
                key={item.id}>
                <input
                  type="checkbox"
                  onChange={() => { onToggle(item.id) }}
                  checked={item.done}
                />
                <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                  {item.todo}
                </span>
                <button onClick={() => { onDelet(item.id) }}>
                  삭제
                </button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default TodoList;