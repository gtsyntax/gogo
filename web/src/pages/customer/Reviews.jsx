import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Reviews() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { reviewList } = useSelector((state) => state.reviews);

  return (
    <main className="p-8">
      <h1>{currentUser.username}</h1>
      <p>{currentUser.id}</p>
      <section className="grid grid-cols-3 gap-4">
        {reviewList.map((review, id) => (
          <div key={id} className="relative border p-4">
            <Link to={`/store/${review.review_id}`}>
              <h1 className="text-xl">{review.restaurant_name}</h1>
              <p className="text-gray-500 text-sm">
                {review.customer_name}: "{review.review_text}"
              </p>
              <p>&#9733; {review.rating}</p>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
