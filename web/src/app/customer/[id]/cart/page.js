"use client"
import { useSelector } from "react-redux"

export default function CustomerCart() {
    const {cart} = useSelector(state => state.cartReducer)
    return (
        <section className="container mx-auto">
            <h1 className="text-2xl font-bold mb-8">Cart</h1>
            <hr/>
            {cart.length > 0 ? (
                <div className="grid grid-cols-5 mt-4 gap-8">
                    <div className="col-span-3 flex flex-col gap-4">
                        {cart.map((item, index) => (
                            <div key={item.id} className="border p-4">
                                <h1 className="text-xl font-bold">{item.name}</h1>
                                <p className="text-lg">{item.description}</p>
                                <p>&#8378;{item.price}</p>
                                <p>qty: 8</p>
                                <button className="text-lg text-red-600">Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col col-span-2 p-8 gap-4">
                        <h1 className="text-xl">Total: &#8378;490</h1>
                        <button className="bg-black text-white py-4 px-8 rounded-full">Checkout</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1>Cart is empty</h1>
                </div>
            )}
        </section>
    )
}