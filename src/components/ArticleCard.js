import React from 'react';
import '../styles/ArticleList.css'
import { Link } from '@reach/router'

const ArticleCard = ({article}) => {
    return (
        <Link className='article-card' to={`/articles/${article.article_id}`}>
        <li >
            <h4>{article.title}</h4><br/>
            <p><b>Posted by</b> {article.author}</p>
            <p></p>
        </li>
        </Link>
    );
};

export default ArticleCard;