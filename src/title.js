"use strict";

import React from "react";

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: "MR.",
      lastname: "Stranger",
    };
  },
  render: function () {
    return <h1>Hello {this.props.name + " " + this.props.lastname} !</h1>;
  },
});

export default Title;
