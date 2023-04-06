import React from 'react';

const Stars = (props) => {
  const { rating } = props;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div>
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <span key={i}>&#9733;</span>
        ))}
      {halfStar && <span>&#189;</span>}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <span key={i}>&#9734;</span>
        ))}
    </div>
  );
};

export default Stars;
