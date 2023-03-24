import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { Header } from '../components/Header';
import { movies } from '../constants/movies';

export function Home() {
  return (
    <main className="container max-w-5xl p-4 py-8 mx-auto">
      <Header />
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {movies.map((movie) => {
          return (
            <MovieCard
              movie={{
                title: movie.title,
                year: movie.year,
                image: movie.image,
                id: movie.id,
              }}
              key={movie.id}
            ></MovieCard>
          );
        })}
      </ul>
    </main>
  );
}
