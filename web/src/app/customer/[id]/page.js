"use client"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

export default function CustomerHome({ params }) {
    const {shopList} = useSelector(state => state.shopReducer)

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto">
            {shopList.map((shop, index) => (
                <div key={shop.id}>
                    <Link href={`/stores/${shop.id}`}>
                        <div className="border p-4 flex justify-between items-center">
                            <div>
                                <h1 className="text-2xl font-bold">{shop.name}</h1>
                                <p className="text-lg text-gray-400">Minimum Delivery fee: &#8378;{shop.minDeliveryFee}</p>
                            </div>
                            <p className="m-4 p-4 bg-emerald-400 rounded-full">{shop.rating.toFixed(1)}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    )
}