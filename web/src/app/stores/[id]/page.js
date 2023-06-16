"use client"
import { addToCart } from "@/redux/features/cart-slice";
import { useDispatch, useSelector } from "react-redux"

export default function StorePage({params}) {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.authReducer)
    const {shopList} = useSelector(state => state.shopReducer)
    const {menus} = useSelector(state => state.shopReducer)
    const currentShop = shopList.find(shop => shop.id === params.id)
    //console.log(currentShop)

    const handleAddToCart = (menu) => {
        dispatch(addToCart(menu))
    }

    return (
        <section className="container mx-auto">
            <div className="my-16">
                <h1 className="text-4xl font-bold">{currentShop.name}</h1>
                <p className="text-lg text-gray-500">{currentShop.rating} (200+ ratings) &middot; &#8378;{currentShop.minDeliveryFee.toFixed(2)} Minimum Delivery Fee &middot; &#8378;&#8378;</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-8">Menus</h2>
                <hr />
                <div className="mt-4 grid grid-cols-2 gap-2">
                    {menus.map((menu, index) => (
                        <div key={menu.id} className="border h-[200px] p-4 relative">
                            <h1 className="text-2xl font-bold">{menu.name}</h1>
                            <p className="text-lg">{menu.description}</p>
                            <p className="font-bold text-lg">&#8378;{menu.price}</p>
                            {user ? (
                                <button className="border rounded-full py-2 px-4 shadow-md absolute right-4 bottom-4" onClick={() => handleAddToCart(menu)}>Add</button>
                            ) : (<></>)}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}