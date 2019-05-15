import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./holder.sass";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        Hello {this.props.name}!
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.get("Example").get("name")
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
