import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = (props) => {
  const { movie } = props;
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <Stars rating={movie.rating} />
      <ReviewList reviews={reviews} />
      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
};

export default Movie;
