import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initialValue, validator) => {
  // validator는 유효성검사기능(사람들이 특수문자를 사용할 수 없게끔하는 기능)
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10; // 입력한 글자의 길이가 10이 초과되지 않게끔 설정
  // => !value.includes("@"); "@"가 입력되면 더이상 입력되지 않게끔 설정
  const name = useInput("Mr.", maxLen);
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
