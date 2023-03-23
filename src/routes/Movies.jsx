import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Header } from '../components/Header';

const movies = [
  {
    title: 'Everything Everywhere All at Once',
    description:
      'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
    rating: 5,
    image: '/assets/images/movies/1.jpg',
    id: 1,
  },
  {
    title: 'The Whale',
    description:
      'A reclusive, morbidly obese English teacher attempts to reconnect with his estranged teenage daughter.',
    rating: 5,
    image: '/assets/images/movies/2.jpg',
    id: 2,
  },
  {
    title: 'Shazam! Fury of the Gods',
    description:
      'The film continues the story of teenage Billy Batson who, upon reciting the magic word "SHAZAM!" is transformed into his adult Super Hero alter ego, Shazam.',
    rating: 5,
    image: '/assets/images/movies/3.jpg',
    id: 3,
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    rating: 5,
    image: '/assets/images/movies/4.jpg',
    id: 4,
  },
];

export function Movies() {
  return (
    <main className="container max-w-5xl p-4 py-8 mx-auto">
      <Header />
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id}></MovieCard>;
        })}
      </ul>
    </main>
  );
}
