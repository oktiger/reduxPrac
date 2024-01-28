import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createStore } from "redux";
import rootReducer from "./reducers/index.tsx";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const render = () =>
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          value={store.getState()}
          onIn={() => store.dispatch({ type: "+" })}
          onDe={() => store.dispatch({ type: "-" })}
        />
      </Provider>
    </React.StrictMode>
  );

render();
store.subscribe(render);
