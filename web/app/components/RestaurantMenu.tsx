export default function RestaurantMenu({ menu }) {
    return (
        <div className="mt-4" key={menu.id}>
            <div className="border shadow-md relative flex h-40">
                <div className="p-8">
                    <p className="font-bold">{menu.name}</p>
                    <p className="text-gray-600">{menu.description}</p>
                    <p>&#8378; {menu.price}</p>
                </div>
                <img src={`${menu.image}`} alt="Menu Item Image" />
                <button className="bg-amber-400 px-8 py-2 font-bold rounded-full absolute right-4 bottom-4">Add</button>
            </div>
        </div>
    )
}