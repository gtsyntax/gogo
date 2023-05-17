import { Navigate, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { MdFavoriteBorder } from "react-icons/md"

export default function CustomerHome() {
    //const { user: currentUser } = useSelector((state) => state.auth)
    const { restaurantList } = useSelector((state) => state.restaurant)

    // if (!currentUser) {
    //     return <Navigate to="/" />
    // }

    return (
        <main className="p-8">
            <h1 className="mb-4 text-2xl font-semibold">Home</h1>
            <hr/>
            <section className="grid grid-cols-3 gap-4 mt-8">
                {restaurantList.map((restaurant, index) => (
                    <div key={index} className="relative border p-4">
                        <Link to={`/store/${restaurant.restaurant_id}`}>
                            <h1 className="text-xl">{restaurant.restaurant_name}</h1>
                            <p className="text-gray-500 text-sm">{restaurant.delivery_time} mins avg delivery time</p>
                            <p className="text-gray-500 text-sm">&#8378;{restaurant.delivery_fee} minimum delivery fee</p>
                            <p>&#9733; {restaurant.rating}</p>
                        </Link>
                        <MdFavoriteBorder size={20}  className="absolute top-4 right-4"/>
                    </div>
                ))}
            </section>
        </main>
    )
}