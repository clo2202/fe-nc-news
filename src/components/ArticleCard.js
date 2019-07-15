import React from 'react';
import '../styles/ArticleList.css'

const ArticleCard = ({article}) => {
    return (
        <li className='article-card'>
            <p>{article.title}</p>
        </li>
    );
};

export default ArticleCard;