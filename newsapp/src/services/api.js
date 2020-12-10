import env from 'react-dotenv'

const NewsApi = require("newsapi");
const api = new NewsApi(env.REACT_APP_GNEWS_APIKEY);

export default api.v2;
