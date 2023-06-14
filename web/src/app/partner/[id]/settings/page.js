"use client"
import { useSelector } from "react-redux"

export default function PartnerSettings() {
    const shop = useSelector(state => state.shopReducer.shop)
    const handleUpdate = (event) => {
        event.preventDefault()
    }
    
    return (
        <main>
            {/* <h1 className="text-2xl font-bold mb-8">Settings</h1>
            <hr />
            <div className="">
                <form className="flex flex-col mt-8 gap-4">
                    <label htmlFor="name">Shop name</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        className="py-4 px-8 text-xl border rounded-full"
                        value={shop.name} 
                        onChange={() => {}}
                    />

                    <label htmlFor="address">Shop address</label>
                    <input 
                        type="text" 
                        id="address"
                        name="address" 
                        className="py-4 px-8 text-xl border rounded-full"
                        value={shop.address} 
                        onChange={() => {}}
                    />

                    <label htmlFor="city">Shop city</label>
                    <input 
                        type="text" 
                        id="city"
                        name="city" 
                        className="py-4 px-8 text-xl border rounded-full"
                        value={shop.city} 
                        onChange={() => {}}
                    />

                    <label htmlFor="country">Shop country</label>
                    <input 
                        type="text" 
                        id="country"
                        name="country"
                        className="py-4 px-8 text-xl border rounded-full"
                        value={shop.country} 
                        onChange={() => {}}
                    />

                    <label htmlFor="zipCode">Shop zip code</label>
                    <input 
                        type="text" 
                        id="zipCode"
                        name="zipCode" 
                        className="py-4 px-8 text-xl border rounded-full"
                        value={shop.zipCode} 
                        onChange={() => {}}
                    />

                    <label htmlFor="minDeliveryFee">Minimum delivery fee</label>
                    <input 
                        type="text" 
                        id="minDeliveryFee"
                        name="minDeliveryFee" 
                        className="py-4 px-8 text-xl border rounded-full"
                        value={shop.minDeliveryFee} 
                        onChange={() => {}}
                    />
                    <button type="submit" className="bg-black text-white rounded-full p-4">Update shop</button>
                </form>
            </div> */}
        </main>
    )
}