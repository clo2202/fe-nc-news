import React from 'react';
import '../styles/ArticleList.css'
import { Link } from '@reach/router'
import Vote from './Vote';
import moment from 'moment'

const ArticleCard = ({article}) => {
    const { article_id, votes, comment_count, created_at } = article
    return (
        <li className='article-card'>
            <Vote votes={votes} id={article_id} section='articles'/>
            <Link  to={`/articles/${article_id}`}> <div className='article-details'>
            <h4>{article.title}</h4>
            <p className='article-author'><b>Posted by</b> {article.author}<span className='article-date'> {moment(`${created_at}`).format("MMM Do YY")}</span></p>
            <p>	<span role="img" aria-label="comment">&#128172;</span> {comment_count} Comments</p>
            </div></Link>
        </li>
    );
};

export default ArticleCard;