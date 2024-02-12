import React from 'react';

const Article = ({ title, date, preview }) => {
  
  const calculateMinutesToRead = (text) => {
    const wordsPerMinute = 200; 
    const words = text.split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  };

  
  const minutesToRead = calculateMinutesToRead(preview);

  
  const emojis =
    minutesToRead <= 30
      ? '☕️'.repeat(Math.ceil(minutesToRead / 5))
      : '🍱'.repeat(Math.ceil(minutesToRead / 10));

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
