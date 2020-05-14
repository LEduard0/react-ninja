"use strict";

import React from "react";
import Title from "./title";

const App = React.createClass({
  render: function () {
    return (
      <div className="container">
        <Title name="Not" lastname={{ first: "a", last: "null" }} />
      </div>
    );
  },
});

export default App;
