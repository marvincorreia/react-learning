import React from "react";
import { connect } from "react-redux";
import { Container } from "./styles";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  increment = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "INCREMENT_COUNTER",
      payload: {},
    });
    // this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    if (this.state.counter > 0) {
      const { dispatch } = this.props;
      dispatch({
        type: "DECREMENT_COUNTER",
        payload: {},
      });
    }
    // this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <Container>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>i++</button>
        <button onClick={this.decrement}>i--</button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ counter: state.counter });

export default connect(mapStateToProps)(Counter);
