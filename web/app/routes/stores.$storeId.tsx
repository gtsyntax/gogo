import { useLoaderData } from "@remix-run/react";
import StoreMenu from "~/components/StoreMenu";

export const loader = async () => {
    return [
        {
            id: "1",
            name: "Cashew Pineapple Fried Rice",
            description: "With multigrains rice, pineapple, cashew",
            price: 30,
            image: "https://placehold.co/150x150"
        },
        {
            id: "2",
            name: "Cashew Pineapple Fried Rice",
            description: "With multigrains rice, pineapple, cashew",
            price: 30,
            image: "https://placehold.co/150x150"
        },
        {
            id: "3",
            name: "Cashew Pineapple Fried Rice",
            description: "With multigrains rice, pineapple, cashew",
            price: 30,
            image: "https://placehold.co/150x150"
        },
        {
            id: "4",
            name: "Cashew Pineapple Fried Rice",
            description: "With multigrains rice, pineapple, cashew",
            price: 30,
            image: "https://placehold.co/150x150"
        }
    ]
}

export default function StoreRoute() {
    const menuItems = useLoaderData<typeof loader>();
    return (
        <div className="grid grid-cols-5 min-h-screen">
            <div className="col-span-4 bg-white">

                <div className="container mx-auto w-9/12 pt-4 min-h-screen">
                    <div className="border">
                        <img 
                            src="https://placehold.co/600x400"
                            alt="Restaurant Image"
                            className="w-full object-cover h-48"
                        />
                    </div>

                    <div className="mt-4 mb-4">
                        <h1 className="text-4xl font-bold">Baba Durum</h1>
                        <ul className="flex gap-2 text-gray-600">
                            <li>Breakfast &#9679;</li>
                            <li>&#9733; 4.88 &#9679;</li>
                            <li>400m away &#9679;</li>
                            <li>&#8378;&#8378;</li>
                        </ul>
                        <p className="text-gray-600">Minimum delivery fee: &#8378; 30</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">Popular Items</h2>
                        <p className="text-gray-600">The most commonly ordered items and dishes from this store</p>
                        <div className="grid grid-cols-2 gap-4">
                            {menuItems.map((menu, key) => (
                                <StoreMenu menu={menu} key={key} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-white border-l p-4">
                <p className="text-gray-500">Your cart is empty</p>
            </div>
        </div>
    )
}