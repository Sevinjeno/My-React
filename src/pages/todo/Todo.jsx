import { useEffect, useState } from "react";
import "./todo.css";

// https://randomuser.me/api/
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  function InputFunction(e) {
    const { value } = e.target;
    setTimeout(() => {
      setInput(value);
    }, 500);
  }
  function AddTodo() {
    if (input.trim() === "") return;
    setTodo((prev) => [...prev, input]);
    setInput("");
  }

  useEffect(() => {
    console.log("Todo", todo);
  }, [todo]);

  return (
    <div className="todo__container">
      <div className="input">
        <input type="text" value={input} onChange={InputFunction} />
        <button onClick={AddTodo}>Add</button>
      </div>
      <ul className="List">
        {todo && todo.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
    </div>
  );
};

export default Todo;
