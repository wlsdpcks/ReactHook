import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};
const App = () => {
  const name = useInput("Mr.");
  return (
    <div classname="App">
      <h1>Hello</h1>
      <input
        placeholder="Name"
        value={name.value}
        onChange={name.onChange}
      />{" "}
      {/* value={name.value} onChange={name.onChange} 대신 {...name}을 사용할 수 있다. */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
