"use strict";

import React from "react";
import Title from "./title";

const App = React.createClass({
  render: function () {
    return (
      <div className="container">
        <Title name="Luiz Edu" />
        <label htmlFor="input">Input </label>
        <input type="name" id="input" />
      </div>
    );
  },
});

export default App;
