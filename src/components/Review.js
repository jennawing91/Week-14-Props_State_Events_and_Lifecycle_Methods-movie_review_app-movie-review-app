import React from 'react';

const Review = (props) => {
  const { review } = props;
  return (
    <div>
      <p>{review.text}</p>
      <p>{review.username}</p>
    </div>
  );
  }