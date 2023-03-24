import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
  orderBy,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from './firebase';

export const movies = [
  {
    title: 'Everything Everywhere All at Once',
    description:
      'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
    image: '/assets/images/movies/1.jpg',
    id: '1',
  },
  {
    title: 'The Whale',
    description:
      'A reclusive, morbidly obese English teacher attempts to reconnect with his estranged teenage daughter.',
    image: '/assets/images/movies/2.jpg',
    id: '2',
  },
  {
    title: 'Shazam! Fury of the Gods',
    description:
      'The film continues the story of teenage Billy Batson who, upon reciting the magic word "SHAZAM!" is transformed into his adult Super Hero alter ego, Shazam.',
    image: '/assets/images/movies/3.jpg',
    id: '3',
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    image: '/assets/images/movies/4.jpg',
    id: '4',
  },
];

export async function addReview({
  movieId,
  review,
  rating,
  displayName,
  userId,
}) {
  await addDoc(collection(db, 'reviews'), {
    movieId: movieId,
    review: review,
    rating: rating,
    displayName: displayName,
    userId: userId,
    timestamp: serverTimestamp(),
  });
}

export async function getReviews({ movieId }) {
  const reviews = [];
  const q = query(
    collection(db, 'reviews'),
    where('movieId', '==', movieId),
    orderBy('timestamp', 'desc')
  );
  const docs = await getDocs(q);
  docs.forEach((doc) => {
    reviews.push({ id: doc.id, ...doc.data() });
  });
  return reviews;
}

export async function getAverageRating({ movieId }) {
  const reviews = await getReviews({ movieId });
  let sum = 0;
  reviews.forEach((review) => {
    sum += parseInt(review.rating);
  });
  return (sum / reviews.length).toFixed(2);
}

export async function deleteReview({ reviewId }) {
  await deleteDoc(doc(db, 'reviews', reviewId));
}
