export default function MenuItemList({ menuItems }) {
    return (
        <section className="container mx-auto grid grid-cols-3 gap-4">
                {menuItems?.map(menuItem => (
                    <div key={menuItem.id}  
                        className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:w-48" src={`${menuItem?.image}`} alt="Food Image" />
                            </div>
                            <div className="p-8 relative">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Food Category</div>
                                <p className="block mt-1 text-lg leading-tight font-medium text-black">{menuItem?.name}</p>
                                <p className="mt-2 text-gray-500">Food description</p>
                                <p className="mt-2 text-gray-500">&#8378; 9.99</p>
                                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4 absolute top-0">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
        </section>
    )
}