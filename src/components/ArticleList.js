import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
  return (
    <main>
      {articles.map((article, index) => (
        <Article key={index} title={article.title} date={article.date} preview={article.preview} />
      ))}
    </main>
  );
};

export default ArticleList;