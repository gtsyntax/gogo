import {Link} from 'react-router-dom';

const addresses =[
    {id:1 ,name: 'aaaa',phoneNum: 5050505 ,address: 'gogo street'},
];

export default function CustomerAddress(){
    return(
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4 bg-brand-primary hover:bg-brand-secondary transition-colors text-white rounded-md p-3 p-4 rounded-md ">
                Addresses
            </h1>
            <ul className="border-t border-gray-200 divide-y divide-gray-200">
                {addresses.map((address) => (
                    <li key={address.id} className="py-4 flex items-center justify-between">
                        <div className="flex-1">
                            <div className="text-lg font-medium text-gray-900">{address.name}</div>
                            <div className="text-gray-500">{address.phoneNum}</div>
                            <div className="text-gray-500">{address.address}</div>
                        </div>
                        <Link to={`/addresses/${address.id}`} className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                            Edit
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}