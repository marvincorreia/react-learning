import env from "react-dotenv";

// const NewsApi = require("newsapi");
// const api = new NewsApi(env.REACT_APP_GNEWS_APIKEY);

// export default api.v2;

// const axios = require("axios").default;
import axios from "axios";

const apiKey = env.REACT_APP_GNEWS_APIKEY;

const api = axios.create({
  baseURL: "https://newsapi.org/",
});

export async function topHeadlines({
  category = "general",
  country = "pt",
}) {
  const response = await api.get(
    `/v2/top-headlines?category=${category}&country=${country}&apiKey=${apiKey}`
  );
  return response.data;
  // return (await api.get(`/v2/top-headlines?country=${country}`)).data;
}

export default api;
