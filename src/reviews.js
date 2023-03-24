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
