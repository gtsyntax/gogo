"use client"
import { getRequest } from "@/api_service";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StoreListPage() {
    const [shopList, setShopList] = useState([]);

    useEffect(() => {
        getAllShops()
    }, [])

    const getAllShops = async () => {
        const allShops = await getRequest("/api/shops")
        console.log(allShops.shops)
        setShopList(allShops.shops)
    }
    
    return (
        <main className="container mx-auto">
            <section className="grid grid-cols-2 gap-8">
                <div className="border flex justify-between">
                    <div className="m-4">
                        <h1 className="font-bold text-2xl">Just Wing It.</h1>
                        <p className="font-light text-lg">15-30 min &#183; $0.49 Delivery Fee &#183; &#8378;</p>
                    </div>
                    
                    <p className="m-4 p-4 bg-lime-200 rounded-full">4.9</p>
                </div>

                <div className="border flex justify-between">
                    <div className="m-4">
                        <h1 className="font-bold text-2xl">Chick N Beer.</h1>
                        <p className="font-light text-lg">15-30 min &#183; $0.49 Delivery Fee &#183; &#8378;&#8378;</p>
                    </div>
                    
                    <p className="m-4 p-4 bg-lime-200 rounded-full">4.6</p>
                </div>
            </section>
        </main>
    )
}