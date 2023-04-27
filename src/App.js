import useCrud from "./useCrud";
import Form from "./Form";
import "./styles.css";
import TodoList from "./TodoList";

export default function App() {
  const [
    input,
    todo,
    handleInput,
    handleSubmitAdd,
    handleDelete,
    handleComplete
  ] = useCrud();

  return (
    <div className="App">
      <Form
        input={input}
        handleInput={handleInput}
        handleSubmitAdd={handleSubmitAdd}
      />
      <TodoList
        todo={todo}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
}
