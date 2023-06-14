"use client"
import { useState } from "react"
import { getRequest, postRequest } from "@/api_service"
import { useDispatch, useSelector } from "react-redux"
import { assignMenu } from "@/redux/features/shop-slice"

export default function PartnerMenus() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
    })

    const dispatch = useDispatch()
    const {shop} = useSelector(state => state.shopReducer)
    const {menus} = useSelector(state => state.shopReducer)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await postRequest("/api/products", {...formData, shopId: shop.id})
        const response = await getRequest(`/api/products/store/${shop.id}`)
        dispatch(assignMenu(response.products))
        //console.log(response.products)
    }

    return (
        <section>
            <h1 className="text-2xl font-bold mb-8">Menus</h1>
            <hr />

            <form className="border shadow flex flex-col w-4/12 mt-4 mb-4 p-2" onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name}  placeholder="Menu name" onChange={handleChange}  className="border p-2"/>
                <input type="text" name="description" value={formData.description}  placeholder="Menu description" onChange={handleChange}  className="border p-2"/>
                <input type="text" name="price" value={formData.price}  placeholder="Menu price" onChange={handleChange}  className="border p-2"/>
                <button type="submit" className="p-4 bg-emerald-700 text-white font-bold">Create Menu</button>
            </form>

            <div>
                {menus.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        {menus.map((menu, index) => (
                            <div className="border p-4" key={menu.id}>
                                <h1 className="text-xl font-bold">{menu.name}</h1>
                                <p className="text-md text-gray-400">{menu.description}</p>
                                <p className="text-md">&#8378;{menu.price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h1>No Menu to show</h1>
                )}
            </div>
        </section>
    )
}

/* 
{
    "name": "Product 1",
    "description": "Product description 1",
    "price": 46,
    "shopId": "ea874646-ee76-4d59-ab20-651a5b53afdf"
}
*/