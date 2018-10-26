import React, { Component } from "react";

class Test extends Component {
  state = {
    Test: "test"
  };

  componentDidMount() {
    console.log("componentDidMount...");
  }
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => console.log(json));
    // console.log("componentWillMount...");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }

  componentWillReceiveProps(nexProps, nextState) {
    console.log("componentWillReceiveProps");
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: "something"
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  // }
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
