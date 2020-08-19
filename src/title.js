"use strict";

import React from "react";

const Title = ({ name, lastname }) => (
  <h1>{`Hello ${name} ${lastname}`}</h1>
);

Title.defaultProps = {
  name: "no",
  lastname: "name"
}

export default Title;
