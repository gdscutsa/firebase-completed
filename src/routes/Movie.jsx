import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useParams } from 'react-router-dom';

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
];

export function MoviePage() {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  return (
    <main className="container max-w-3xl p-4 py-8 mx-auto">
      <Header />
      <section className="flex flex-col items-center md:flex-row md:space-x-5 space-y-2">
        <img src="/assets/images/movies/1.jpg" alt="img" className="w-96"></img>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">
            Everything Everywhere All at Once
          </h1>
          <p>
            A middle-aged Chinese immigrant is swept up into an insane adventure
            in which she alone can save existence by exploring other universes
            and connecting with the lives she could have led.
          </p>
          <p className="mt-10">
            Rating: <span>5</span>
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mt-10">Reviews</h2>

        <p>No reviews</p>
        {/* <ul className="flex flex-col space-y-2 mt-5">
          <li>No Reviews</li>
        </ul> */}
      </section>
      <section>
        <h2 className="text-2xl font-bold mt-10">Add a review</h2>
        {user ? (
          <form className="flex flex-col space-y-2 mt-5">
            <label htmlFor="rating">Rating (1-5)*:</label>
            <input
              className="bg-zinc-100 border-2 border-zinc-300 w-10"
              type="number"
              name="rating"
              id="rating"
              min="1"
              max="5"
              required
            />
            <label htmlFor="review">Review:</label>
            <textarea
              className="bg-zinc-100 border-2 border-zinc-300"
              name="review"
              id="review"
              cols="30"
              rows="10"
            ></textarea>
            <button className="bg-black text-white p-2 rounded-md">
              Submit
            </button>
          </form>
        ) : (
          <p>Please login to add a review</p>
        )}
      </section>
    </main>
  );
}
