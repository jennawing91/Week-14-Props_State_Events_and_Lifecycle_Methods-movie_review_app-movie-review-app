import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  //const { movies } = props;
  const [movies, setMovies] = useState([
    {
      id: 1,
      image: 'https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg',
      title: 'Iron Man',
      synopsis: 'A billionaire genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.',
      reviews: [],
    },

    {
      id: 2,
      image: 'https://flxt.tmsimg.com/assets/p176337_p_v8_am.jpg',
      title: 'The Incredible Hulk',
      synopsis: 'Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).',
      reviews: [],
    },

    {
      id: 3,
      image: 'https://m.media-amazon.com/images/M/MV5BNWFlMjllMmItODk4NS00YTE1LTg1YzktMDMyYmQzNzc5NzdlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
      title: 'Iron Man 2',
      synopsis: 'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands.',
      reviews: [],
    },

    {
      id: 4,
      image: 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
      title: 'Thor',
      synopsis: "As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth.",
      reviews: [],
    },])

  return (
    <div>
      This is my movie list component
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
 