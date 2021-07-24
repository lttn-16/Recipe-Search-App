import React, { Component } from "react";
import Preview from "./Preview/Preview";
import Detail from "./Detail/Detail";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Preview />
        <Detail />
      </React.Fragment>
    );
  }
}

export default Main;
