export function Review({ review, canDelete = false, onDelete }) {
  return (
    <div className="grid grid-cols-5 justify-start items-start py-3 gap-4">
      <div className="w-56">
        <h2 className="text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis">
          {review.displayName}
        </h2>
        <h3 className="text-lg">Rating: {review.rating}</h3>
      </div>
      <p className="col-span-3 text-lg">{review.review}</p>
      {canDelete ? (
        <button
          className="bg-red-500 p-1 text-white"
          onClick={() => {
            onDelete(review.id);
          }}
        >
          Delete
        </button>
      ) : null}
    </div>
  );
}
