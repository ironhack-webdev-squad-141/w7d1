import React from "react";

// const Greeting = props => {
//   //   props.lastName = "Big"; -> bad
//   return <div>Welcome {props.firstName}</div>;
// };

class Greeting extends React.Component {
  render() {
    return <div>Welcome {this.props.firstName}</div>;
  }
}

export default Greeting;
