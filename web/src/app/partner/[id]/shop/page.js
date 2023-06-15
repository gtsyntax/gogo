"use client"
import { getRequest } from "@/api_service"
import NewStore from "@/componenets/NewStore"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { assignShop } from "@/redux/features/shop-slice"

export default function PartnerShop({ params }) {
    const dispatch = useDispatch()
    const {shop} = useSelector(state => state.shopReducer)

    useEffect(() => {
        getPartnerShop()
    }, [])

    const getPartnerShop = async () => {
        const response = await getRequest(`/api/shops/owner/${params.id}`)
        dispatch(assignShop(response))
    }
    return (
        <main>
            {shop ? (
                <section>
                    <h1 className="text-2xl font-bold mb-8">Shop</h1>
                    <hr />
                    <div className="mt-8 border p-4">
                        <p className="text-xl">Name: <span className="font-bold">{shop.name}</span></p>
                        <p className="text-xl">Address: <span className="font-bold">{shop.address}</span></p>
                        <p className="text-xl">City: <span className="font-bold">{shop.city}</span></p>
                        <p className="text-xl">Zip Code: <span className="font-bold">{shop.zipCode}</span></p>
                        <p className="text-xl">Min Delivery Fee: <span className="font-bold">{shop.minDeliveryFee}</span></p>
                        <p className="text-xl">Created Date: <span className="font-bold">{shop.createdAt}</span></p>
                    </div>
                </section>
            ) : (

                <NewStore />
            )}
        </main>
    )
}

