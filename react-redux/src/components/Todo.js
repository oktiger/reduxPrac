import React from "react";
import { connect, useDispatch } from "react-redux";
import { actionCreaters } from "../store";
import { Link } from "react-router-dom";

const Todo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
};

function mapDispatchProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreaters.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchProps)(Todo);
