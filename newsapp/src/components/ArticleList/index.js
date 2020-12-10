import React, { Component } from "react";
import api from "../../services/api";
import env from "react-dotenv";

import Article from "../Article";

class ArticleList extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=pt&category=technology&apiKey=${env.REACT_APP_GNEWS_APIKEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "ok") {
          this.setState({ articles: response.articles });
        }
      });

    // const response = await api.topHeadlines({
    //   category: "general",
    //   country: "us",
    // });

    // if (response.status === "ok") {
    //   this.setState({ articles: response.articles });
    // }
  }

  render() {
    const articles = this.state.articles;
    if (articles.length > 0) {
      return articles.map((article) => (
        <Article article={article} />
      ));
    } else {
      return <h2>Without articles in the moment</h2>;
    }
  }
}

export default ArticleList;
