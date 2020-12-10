import React, { Component } from "react";

import Tabs from "../../components/Tabs";
import ArticleList from "../../components/ArticleList";

class Home extends Component {
  render() {
    return (
      <div>
        <Tabs />
        <ArticleList />
      </div>
    );
  }
}

export default Home;
