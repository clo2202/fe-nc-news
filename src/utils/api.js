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

export const getCommentsbyArticle = async (article_id) => {
  const { data } = await axios.get(`${baseUrl}/articles/${article_id}/comments`)
  return data.comments
}

export const postComment = async (article_id, newComment) => {
  const { data } = await axios.post(`${baseUrl}/articles/${article_id}/comments`, newComment)
  return data.comment
}

export const updateVotes = async (id, inc_votes) => {
  const { data } = await axios.patch(`${baseUrl}/articles/${id}`, {inc_votes})
  return data.article
}