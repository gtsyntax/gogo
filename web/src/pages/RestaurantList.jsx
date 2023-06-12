import Header from "../componenets/Header"
import { useSelector } from "react-redux"

export default function RestaurantList() {
    const { restaurantList } = useSelector((state) => state.restaurant)

    const restaurantListRender = restaurantList.map((item, index) => (
        <div key={index} className="border-b my-4 py-4">
            <p className="text-2xl font-bold">{item.restaurant_name}</p>
            <div className="flex space-x-2">
                <p className="text-gray-500">{item.cuisine_type}</p>
                <p className="text-gray-500">&#9733; {item.rating}</p>
            </div>
        </div>
    ))

    return (
        <main>
            <Header />
            <div className="container mx-auto">
                {restaurantListRender}
            </div>
        </main>
    )
}