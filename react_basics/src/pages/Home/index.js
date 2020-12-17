import React, { Component } from "react";

import Title from "../../components/Title";
import Counter from '../../components/Counter';

class Home extends Component {
  render() {
    return (
      <>
        <Title text="Home page" />
        <Counter/>
      </>
    );
  }
}

export default Home;
