"use client"
import { postRequest } from "@/api_service"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useSelector } from "react-redux"

export default function NewStorePage() {
    const router = useRouter()
    const {user} = useSelector(state => state.authReducer)

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        country: "",
        zipCode: "",
        minDeliveryFee: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formData)
        const response = await postRequest("/api/shops", {...formData, shopOwner: user.id})
        router.push(`/partner/${user.id}`)
    }

    return (
        <main className="min-h-screen flex justify-center items-center">
            <div className="border w-[600px] h-[800px] shadow p-8 rounded-2xl">
                <div className="mb-8">
                    <h1 className="font-bold text-2xl">Create Store</h1>
                    <p className="font-light text-lg">Start selling on Gogo</p>
                </div>

                <form className="flex flex-col gap-4 mb-4" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="border py-4 px-8 rounded-full"
                    />

                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        className="border py-4 px-8 rounded-full"
                    />

                    <input 
                        type="text" 
                        name="city" 
                        placeholder="City" 
                        value={formData.city} 
                        onChange={handleChange} 
                        className="border py-4 px-8 rounded-full"
                    />

                    <input 
                        type="text" 
                        name="country" 
                        placeholder="Country" 
                        value={formData.country} 
                        onChange={handleChange} 
                        className="border py-4 px-8 rounded-full"
                    />

                    <input 
                        type="text" 
                        name="zipCode" 
                        placeholder="Zip Code" 
                        value={formData.zipCode} 
                        onChange={handleChange} 
                        className="border py-4 px-8 rounded-full"
                    />

                    <input 
                        type="text" 
                        name="minDeliveryFee" 
                        placeholder="Minimum Delivery Fee" 
                        value={formData.minDeliveryFee} 
                        onChange={handleChange} 
                        className="border py-4 px-8 rounded-full"
                    />
                    <button type="submit" className="bg-emerald-600 text-white text-xl font-bold p-4 rounded-full">Create Store</button>
                </form>
            </div>
        </main>
    )
}