import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // count += 1;
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
    // count -= 1;
  };

  const reset = () => {
    // count = 0;
    setCount(0);
  };

  const toggleTheme = () => {
    alert("dark mode/light mode yet to implement");
  };

  return (
    <div className="card text-center my-5">
      <div className="container my-5">
        <div className="card-body">
          <h1>COUNTER APP</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className="btn btn-danger ms-3" onClick={decrement}>
              DECREMENT
            </button>
            <button className="btn btn-secondary ms-3" onClick={reset}>
              RESET
            </button>
            <button className="btn btn-success ms-3" onClick={increment}>
              INCREMENT
            </button>
          </div>
        </div>
      </div>
      <div className="text-center my-5 btn-warning">
        <a href="aaa" className="btn" onClick={() => toggleTheme()}>
          Change Theme
        </a>
      </div>
    </div>
  );
};

export default App;
