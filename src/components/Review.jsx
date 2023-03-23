export function Review({ review }) {
  return (
    <div className="flex flex-row justify-start items-start py-3">
      <div className="w-56">
        <h2 className="text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis">
          {review.displayName}
        </h2>
        <h3 className="text-lg">Rating: {review.rating}</h3>
      </div>
      <p className="text-lg w-3/4 mx-5">{review.review}</p>
    </div>
  );
}
