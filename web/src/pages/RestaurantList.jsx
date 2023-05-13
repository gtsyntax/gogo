import Header from "../componenets/Header"
import { useSelector } from "react-redux"

export default function RestaurantList() {
    const { restaurantList } = useSelector((state) => state.restaurant)

    const restaurantListRender = restaurantList.map((item, index) => (
        <div key={index} className="border p-4">
            <p className="text-xl">{item.restaurant_name}</p>
            <div className="flex space-x-2">
                <p className="text-sm font-light">{item.cuisine_type}</p>
                <p className="text-sm font-light">{item.delivery_time} min</p>
                <p className="text-sm font-light">&#8378; {item.delivery_fee} Delivery Fee</p>
                <p className="text-sm font-light">&#9733; {item.rating}</p>
            </div>
        </div>
    ))

    return (
        <main>
            <Header />
            <div className="grid grid-cols-2 container mx-auto gap-8 mt-10">
                {restaurantListRender}
            </div>
        </main>
    )
}