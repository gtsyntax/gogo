import { useLoaderData } from "@remix-run/react"
import MenuItemList from "~/components/MenuItemList";

export const loader = async () => {
    return [
        {
            id: "1",
            name: "Safeway",
            categories: ["Groceries", "Bakery", "Wholesale"],
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: "2",
            name: "Petco",
            categories: ["Pet Supplies"],
            image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: "3",
            name: "Bi-Rite Market",
            categories: ["Organic", "Alchol", "Prepared"],
            image: "https://images.unsplash.com/photo-1574172367915-0059de1452f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: "4",
            name: "Costco",
            categories: ["Groceries", "Wholesale"],
            image: "https://images.unsplash.com/photo-1528198622811-0842b4e50787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: "5",
            name: "HMart",
            categories: ["Specialty", "Prepared Meals", "Ethnic", "Wholesale"],
            image: "https://images.unsplash.com/photo-1536329639134-ade172b2fea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: "6",
            name: "CVS",
            categories: ["Personal Care", "Drugstore", "Groceries"],
            image: "https://images.unsplash.com/photo-1579065472192-c3f98f86b6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
    ]
}

export default function RestaurantRoute() {
    const menuItems = useLoaderData<typeof loader>();

    return (
        <div className="grid grid-cols-5 min-h-screen">
            <div className="col-span-4 bg-white">
                <div className="container mx-auto w-9/12 pt-4 min-h-screen">
                    <div className="border">
                        <img 
                            src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Restaurant Image"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-white border-l p-4">
                <p className="text-gray-500">Your cart is empty</p>
            </div>
        </div>
    )
}