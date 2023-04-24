export default function RestaurantMenu({ menu }) {
    return (
        <div key={menu.id} className="border shadow-md flex">
            <div className="p-8 basis-9/12">
                <p className="font-bold">{menu.name}</p>
                <p className="text-gray-600">{menu.description}</p>
                <p>&#8378; {menu.price}</p>
                <button className="bg-amber-400 px-8 py-2 font-bold mt-4 mb-4">Add</button>
            </div>
            <img src={`${menu.image}`} alt="Menu Item Image" className="basis-3/12" />
        </div>
    )
}