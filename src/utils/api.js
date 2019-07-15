import axios from 'axios';

const baseUrl = 'https://n-coders-news.herokuapp.com/api'

export const getArticles = async () => {
    const { data } = await axios.get(`${baseUrl}/topics`);
    return data.topics
}