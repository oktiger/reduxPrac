import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";

type Props = {
  value: any;
  onIn: () => void;
  onDe: () => void;
};

function App({ value, onIn, onDe }: Props) {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter)
  const todos: string[] = useSelector((state: RootState) => state.todos)
  const [todo, setTodo] = useState(" ");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({type:"ADD_TODO", text:todo})
    setTodo(" ");
  };

  return (
    <>
      <div>
        Let's Click! {counter}
        <button onClick={onIn}>+</button>
        <button onClick={onDe}>-</button>
      </div>

      <div>
        <form onSubmit={onSubmit}>
          <input type="text" value={todo} onChange={onChange} />
          <input type="submit" />
        </form>
      </div>

      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </>
  );
}

export default App;
