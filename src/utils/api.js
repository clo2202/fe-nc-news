import axios from "axios";

const baseUrl = "https://n-coders-news.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${baseUrl}/topics`);
  return data.topics;
};

export const getArticles = async topic => {
  const { data } = await axios.get(`${baseUrl}/articles`, {
    params: { topic }
  });
  return data.articles;
};

export const getArticleById = async (article_id) => {
  const { data } = await axios.get(`${baseUrl}/articles/${article_id}`)
  return data.article
}
