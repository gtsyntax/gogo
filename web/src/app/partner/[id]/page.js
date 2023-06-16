"use client"
import { useDispatch } from "react-redux"

export default function PartnerHome({params}) {
    const dispatch = useDispatch()

    return (
        <main>
            <h1 className="text-2xl font-bold mb-8">Home</h1>
            <hr />
            <div className="grid grid-cols-4 h-[500px] mt-8">
                <div className="flex flex-col">
                    <div className="my-8">
                        <h3 className="text-xl">Revenue</h3>
                        <h1 className="text-2xl">&#8378;0.00</h1>
                    </div>

                    <div className="my-8">
                        <h3 className="text-xl">Active Orders</h3>
                        <h1 className="text-2xl">0</h1>
                    </div>

                    <div className="my-8">
                        <h3 className="text-xl">Orders Completed</h3>
                        <h1 className="text-2xl">0</h1>
                    </div>

                    <div className="my-8">
                        <h3 className="text-xl">Cancelled Orders</h3>
                        <h1 className="text-2xl">0</h1>
                    </div>
                </div>
                <div className="border col-span-3 flex justify-center items-center">
                    <h1 className="text-xl text-gray-400">No data available</h1>
                </div>
            </div>
        </main>
    )
}