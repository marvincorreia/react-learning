import React from "react";

import { Card, CardTextContent, Link } from "./styles";

export default function Article({ article }) {
  return (
    <Card>
      <Link to={article.url} target="_blank">
        <img src={article.urlToImage} alt="" />
      </Link>
      <CardTextContent>
        <small>{article.author}</small>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </CardTextContent>
    </Card>
  );
}
