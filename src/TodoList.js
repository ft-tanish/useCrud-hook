const TodoList = ({ todo, handleDelete, handleComplete }) => {
  return (
    <div>
      {todo.map((item) => {
        return (
          <ul>
            <li className="todo-list" id={item.id}>
              <input
                type="text"
                value={item.text}
                onChange={(e) => e.preventDefault()}
              />
              <button onClick={() => handleComplete(item)}>Done</button>
              <button>Edit</button>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default TodoList;
