import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreaters} from "../store";
import Todo from "../components/Todo";

function Home({ todos, addToDo }) {
  
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text)
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{todos.map(toDo => 
        <Todo {...toDo} key={toDo.id}/>)}
      </ul>
    </>
  );
}

function getCurrentState(state) {
  return {
    todos: state,
  };
}
function mapDispatchProps(dispatch) {
  return {
    // 함수만들기 : 이 함수가 실행되면 인자들과 함께 dispatch를 호출한다. 
    addToDo: (text) => dispatch(actionCreaters.addToDo(text)),
  };
}

export default connect(getCurrentState, mapDispatchProps)(Home);
