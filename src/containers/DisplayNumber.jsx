import DisplayNumber from "../components/DisplayNumber";
import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";

function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
}
function mapReduxDispatchToReactProps() {
  return {};
}

export default connect(mapReduxStateToReactProps, function (distpatch) {
  return {};
})(DisplayNumber);

// export default class extends Component {
//   state = { number: store.getState().number };
//   constructor(props) {
//     super(props);
//     store.subscribe(() => {
//       this.setState({ number: store.getState().number });
//     });
//   }
//   render() {
//     return <DisplayNumber number={this.state.number}></DisplayNumber>;
//   }
// }
