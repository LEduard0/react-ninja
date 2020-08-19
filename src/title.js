"use strict";

import React from "react";

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: "MR.",
      lastname: {
        first: "Serious",
        last: "Strange",
      },
    };
  },
  render: function () {
    return (
      <h1>
        Hello{" "}
        {this.props.name +
          " " +
          this.props.lastname.first +
          " " +
          this.props.lastname.last}{" "}
        !
      </h1>
    );
  },
});

export default Title;
