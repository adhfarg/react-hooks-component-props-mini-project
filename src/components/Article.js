import React from 'react';

const Article = ({ title, date, preview }) => {
 
  const minutesToRead = Math.ceil(preview.split(' ').length / 200); 
  
  const emojis = minutesToRead <= 30 ?
    '☕️'.repeat(Math.ceil(minutesToRead / 5)) :
    '🍱'.repeat(Math.ceil(minutesToRead / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <small>{emojis} {minutesToRead} min read</small>
    </article>
  );
};

export default Article;