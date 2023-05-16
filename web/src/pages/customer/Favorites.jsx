import {Link} from 'react-router-dom';


const favouriteProducts =[
    {id: 1, name: 'Product 1', price: 10.99, image: 'https://via.placeholder.com/150'},
    {id: 2, name: 'Product 2', price: 9.99, image: 'https://via.placeholder.com/150'},
    {id: 3, name: 'Product 3', price: 12.99, image: 'https://via.placeholder.com/150'},
];

export default function CustomerFavorites(){
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4 bg-brand-primary hover:bg-brand-secondary transition-colors text-white rounded-md p-3 p-4 rounded-md ">
                Favourite Products
            </h1>
            <ul className="border-t border-gray-200 divide-y divide-gray-200">
                {favouriteProducts.map((product) => (
                    <li key={product.id} className="py-4 flex items-center justify-between">
                        <div className="flex-1 flex items-center">
                            <img className="w-16 h-16 rounded-full" src={product.image} alt={product.name} />
                            <div className="ml-4">
                                <div className="text-lg font-medium text-gray-900">{product.name}</div>
                                <div className="text-gray-500">{product.price}</div>
                            </div>
                        </div>
                        <Link to={`/products/${product.id}`} className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                            View
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}