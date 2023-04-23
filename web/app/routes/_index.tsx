import { Link, useLoaderData } from "@remix-run/react";
import PrimaryNav from "~/components/PrimaryNav";
import RestaurantList from "~/components/RestaurantList";
import StoreList from "~/components/StoreList";

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

export default function IndexRoute() {
    const stores = useLoaderData<typeof loader>();
    return (
        <main>
            <PrimaryNav />
            <section className="container mx-auto flex flex-col items-center justify-center">
                <h1 className="text-3xl text-center font-bold w-1/2 mt-8 mb-8">Choose your restaurants in Istanbul</h1>
                <RestaurantList restaurants={stores} />
                <Link to="/restaurants" className="mt-8 mb-8 px-8 py-2 bg-amber-400 rounded-full">View more restaurants</Link>
            </section>
            <section className="container mx-auto flex flex-col items-center justify-center">
                <h1 className="text-3xl text-center font-bold w-1/2 mt-8 mb-8">Choose your store in Istanbul</h1>
                <StoreList stores={stores} />
                <Link to="/stores" className="mt-8 mb-8 px-8 py-2 bg-amber-400 rounded-full">View more stores</Link>
            </section>
        </main>
    )
}