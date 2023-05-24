import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { removeFavorite } from "../../slices/favorites";

export default function Customerfavorites() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { favoritesList } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <main className="p-8"> 
      <h1>{currentUser.username}</h1>
      <p>{currentUser.id}</p>
      <section className="grid grid-cols-3 gap-4">
        {favoritesList.map((favorite, id) => (
          <div key={id} className="relative border p-4">
            <Link to={`/store/${favorite.id}`}>
              <h1 className="text-xl">{favorite.name}</h1>
              <p className="text-gray-500 text-sm">
                {favorite.delivery_time} mins avg delivery time
              </p>
              <p className="text-gray-500 text-sm">
                &#8378;{favorite.delivery_fee} minimum delivery fee
              </p>
              <p>&#9733; {favorite.rating}</p>
            </Link>
            <button
              className="absolute top-4 right-4"
              onClick={() => {
                dispatch(removeFavorite(favorite));
              }}
            >
              <AiFillHeart size={20} />
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
