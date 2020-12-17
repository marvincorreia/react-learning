import React, { Component } from "react";

import * as api from "../../services/api";
import env from "react-dotenv";
import Article from "../Article";
import Loader from "../Loader";

class ArticleList extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    // fetch(
    //   `https://newsapi.org/v2/top-headlines?country=pt&category=technology&apiKey=${env.REACT_APP_GNEWS_APIKEY}`
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     if (response.status === "ok") {
    //       this.setState({ articles: response.articles });
    //     }
    //   });

    const response = await api.topHeadlines({});

    if (response.status === "ok") {
      this.setState({ articles: response.articles });
    }
  }

  render() {
    const articles = this.state.articles;
    if (articles.length > 0) {
      return articles.map((article) => <Article article={article} />);
    } else {
      return <Loader />;
    }
  }
}

export default ArticleList;
