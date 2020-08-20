"use strict";

import React from "react";
import Title from "./title";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Title name="Has" lastname="Name" />
      </div>
    );
  }
}

export default App;
