"use client"
import Link from "next/link"
import { useSelector } from "react-redux"

export default function StoreListPage() {
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

{/* {data.map((shop, index) => (
    <div key={index} className="border rounded-lg p-4">
        <Link href={`/stores/${shop.id}`}>
            <div className="relative h-[500px]">
                <Image src={shop.image} alt={`${shop.name} shop`} fill={true} className="object-cover"/>
            </div>
            <div className="border p-4 flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-semibold">{shop.name}</h1>
                    <p className="text-lg">{shop.cuisine}</p>
                    <p className="text-lg">Delivery time: {shop.deliveryInterval} minutes</p>
                    <p className="text-lg">Minimum Delivery fee: &#8378;{shop.minDeliveryFee}</p>
                </div>
                <p className="m-4 p-4 bg-emerald-200 rounded-full">{shop.rating.toFixed(1)}</p>
            </div>
        </Link>
    </div>
))} */}

