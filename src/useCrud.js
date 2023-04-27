import { useState } from "react";

const useCrud = (props) => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        id: Math.floor(Math.random() * 10000),
        text: input,
        completed: false
      }
    ]);
    setInput("");
  };

  const handleDelete = ({ id }) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const handleComplete = (item) => {
    if (!Array.isArray(todo)) {
      return;
    }
    setTodo(
      todo.map((Item) => {
        if (Item.id === item.id) {
          return { ...Item, completed: !Item.completed };
        }
        return Item;
      })
    );
  };

  return [
    input,
    todo,
    handleInput,
    handleSubmitAdd,
    handleDelete,
    handleComplete
  ];
};

export default useCrud;
