import { Link } from "@remix-run/react";

export default function RestaurantList({ restaurants }) {
    return (
        <section className="container mx-auto grid grid-cols-3 gap-4">
            {restaurants?.map(restaurant => (
                <Link to={`/restaurants/${restaurant?.id}`} 
                    key={restaurant.id}  
                    className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-40 w-full object-cover md:w-48" src={`${restaurant?.image}`} alt="Food Image" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-amber-600 font-semibold">&#9733; 4.88</div>
                            <p className="block mt-1 text-lg leading-tight font-medium text-black">{restaurant.name}</p>
                            <p className="mt-2 text-gray-500">Breakfast - &#8378;&#8378;</p>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    )
}