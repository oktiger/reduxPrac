import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer은 function이고 data를 modify한다.
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    console.log(count, action);
    return count + 1;
  } else if (action.type === "minus") {
    console.log(count, action);
    return count - 1;
  } else {
    return count;
  }
};
// createStore는 reducer(createModifier)이 첫번째 인자로 필요하다.
const countStore = legacy_createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

// dispatch를 통해 countModifier의 action값을 object형태로 조정할 수 있다.
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "minus" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
