import React from 'react';
import '../styles/ArticleList.css'
import { Link } from '@reach/router'
import Vote from './Vote';

const ArticleCard = ({article}) => {
    const { article_id, votes, section} = article
    return (
        <li className='article-card'>
            <Vote votes={votes} id={article_id}/>
            <div>
            <Link  to={`/articles/${article_id}`}><h4>{article.title}</h4></Link>
            <p><b>Posted by</b> {article.author}</p>
            </div>
        </li>
    );
};

export default ArticleCard;