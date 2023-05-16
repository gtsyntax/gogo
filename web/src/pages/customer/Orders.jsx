import {Link} from 'react-router-dom';


const orders =[
    { id: 1, date: '2023-05-08', totalPrice: 120.0 },
    { id: 2, date: '2023-05-05', totalPrice: 75.0 },
    { id: 3, date: '2023-04-30', totalPrice: 102.5 },
  ];

export default function CustomerOrders(){
    return (
        <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4 bg-brand-primary hover:bg-brand-secondary transition-colors text-white rounded-md p-3 p-4 rounded-md ">
        Previous Orders
      </h1>
      <ul className="border-t border-gray-200 divide-y divide-gray-200">
        {orders.map((order) => (
          <li key={order.id} className="py-4 flex items-center justify-between">
            <div className="flex-1">
              <div className="text-lg font-medium text-gray-900">Order #{order.id}</div>
              <div className="text-gray-500">Date: {order.date}</div>
              <div className="text-gray-500">Total price: ${order.totalPrice.toFixed(2)}</div>
            </div>
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
    )
}