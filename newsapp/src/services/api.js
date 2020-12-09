require("dotenv").config();

const NewsApi = require("newsapi");
const api = new NewsApi(process.env.REACT_APP_GNEWS_APIKEY);

export default api.v2;
