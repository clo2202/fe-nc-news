import React from 'react';
import '../styles/ArticleList.css'
import { Link } from '@reach/router'
import Vote from './Vote';

const ArticleCard = ({article}) => {
    const { article_id, votes, comment_count } = article
    return (
        <li className='article-card'>
            <Vote votes={votes} id={article_id} section='articles'/>
            <div className='article-details'>
            <Link  to={`/articles/${article_id}`}><h4>{article.title}</h4></Link>
            <p><b>Posted by</b> {article.author}</p>
            <p>	<span role="img" aria-label="comment">&#128172;</span> {comment_count} Comments</p>
            </div>
        </li>
    );
};

export default ArticleCard;