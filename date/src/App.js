import React, { Component } from "react";
import "./App.css";

import DateFnsExample from "./components/DateFns/DateFnsExample";
import MomentExample from "./components/Moment/MomentExample";
import DayjsExample from "./components/Dayjs/DayjsExample";

function App() {
  return (
    <div className="App">
      <DateFnsExample />
      <DayjsExample />
      <MomentExample />
    </div>
  );
}

export default App;
