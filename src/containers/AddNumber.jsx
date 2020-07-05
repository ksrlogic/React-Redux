import React, { Component } from "react";
import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

export default connect(null, (dispatch) => {
  return {
    onClick: (size) => {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
})(AddNumber);
// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={(size) => {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }}
//       ></AddNumber>
//     );
//   }
// }
