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
                <h1>Shop</h1>
            ) : (

                <NewStore />
            )}
        </main>
    )
}

