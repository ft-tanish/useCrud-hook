const Form = ({ input, handleInput, handleSubmitAdd }) => {
  return (
    <form onSubmit={handleSubmitAdd}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="todo-input"
        value={input}
        required
        onChange={handleInput}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
