import { Navigate, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { MdFavoriteBorder } from "react-icons/md"
import MenuItemCard from "../../componenets/MenuItemCard"
import RestaurantCard from "../../componenets/RestaurantCard"

export default function CustomerHome() {
    //const { user: currentUser } = useSelector((state) => state.auth)
    const { restaurantList } = useSelector((state) => state.restaurant)

    // if (!currentUser) {
    //     return <Navigate to="/" />
    // }

    const restaurant = {
        name: "Delicious Bistro",
        address: "123 Main St, City",
        hours: "Mon-Sat: 10am-10pm",
        contact: "(123) 456-7890",
        rating: "4.8",
        image: "https://placehold.co/600x400/png"
    };

    const order = {
        status: 'delivered',
        progress: 100
    };

    const restaurants = [
        {
          id: 1,
          name: 'Delicious Bistro',
          cuisine: 'Italian, French',
          rating: '4.8',
          image: 'https://placehold.co/600x400/png',
        },
        {
          id: 2,
          name: 'Spicy Thai Kitchen',
          cuisine: 'Thai',
          rating: '4.5',
          image: 'https://placehold.co/600x400/png',
        },
        {
            id: 3,
            name: 'The Burger Join',
            cuisine: 'Thai',
            rating: '4.5',
            image: 'https://placehold.co/600x400/png',
        },
      ];

    const cartItems = [
        {
          id: 1,
          name: 'Pizza',
          price: 12.99,
          quantity: 2,
          image: 'pizza.jpg',
        },
        {
          id: 2,
          name: 'Burger',
          price: 8.99,
          quantity: 1,
          image: 'burger.jpg',
        },
        // Add more cart item objects as needed
    ];

    return (
        <main className="p-8">
            <section>
                <HeroSection />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {restaurantList.map((restaurant, index) => (
                    <MenuItemCard 
                        key={index} name={restaurant.restaurant_name} 
                        description="A juicy beef patty with fresh lettuce, tomatoes, and secret sauce."
                        price="9.99"
                        image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    />
                ))}
            </section>
            <section>
                <Banner />
            </section>
        </main>
    )
}

const HeroSection = () => {
    return (
      <section className="bg-gray-900 text-white py-16 rounded-lg">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Discover the New Taste</h1>
          <p className="text-lg md:text-xl mb-12">Try our mouth-watering dishes today!</p>
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium text-lg"
          >
            Order Now
          </a>
        </div>
      </section>
    );
};


const Banner = () => {
    return (
      <section className="bg-gray-900 text-white py-12 rounded-lg">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Offer!</h1>
          <p className="text-lg md:text-xl mb-8">Get 20% off on all orders today.</p>
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium text-lg"
          >
            Order Now
          </a>
        </div>
      </section>
    );
};

const RestaurantDetails = ({ name, address, hours, contact, rating, image }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src={image} alt={name} className="w-20 h-20 mb-4 rounded-full" />
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-2">{address}</p>
        <p className="text-gray-700 mb-4">Operating Hours: {hours}</p>
        <p className="text-gray-700 mb-2">Contact: {contact}</p>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">&#9733;</span>
          <span className="text-gray-700">{rating}</span>
        </div>
      </div>
    );
};


const OrderTracking = ({ status, progress }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>
        <div className="flex items-center mb-4">
          <div className={`w-6 h-6 rounded-full ${status === 'preparing' ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
          <p className="text-gray-700 ml-2">Preparing</p>
        </div>
        <div className="flex items-center mb-4">
          <div className={`w-6 h-6 rounded-full ${status === 'cooking' ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
          <p className="text-gray-700 ml-2">Cooking</p>
        </div>
        <div className="flex items-center mb-4">
          <div className={`w-6 h-6 rounded-full ${status === 'out_for_delivery' ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
          <p className="text-gray-700 ml-2">Out for Delivery</p>
        </div>
        <div className="flex items-center">
          <div className={`w-6 h-6 rounded-full ${status === 'delivered' ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
          <p className="text-gray-700 ml-2">Delivered</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">Progress: {progress}%</p>
          <div className="bg-gray-300 h-2 rounded-full mt-2">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    );
};

const RestaurantListings = ({ restaurants }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={restaurant.image} alt={restaurant.name} className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
            <p className="text-gray-700 mb-2">{restaurant.cuisine}</p>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span className="text-gray-700">{restaurant.rating}</span>
            </div>
          </div>
        ))}
      </div>
    );
};

const Cart = ({ items }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {items.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {items.map((item) => (
              <li key={item.id} className="flex items-center py-2">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-700">${item.price}</p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};