import {Link} from 'react-router-dom';

const paymentMethods = [
    { id: 1, name: 'John Doe', cardNumber: '**** **** **** 1234', expiryDate: '06/24' },
  ];


export default function CustomerSettings(){
    return (
        <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4 hover:bg-[#19A7CE] p-4 rounded-md bg-gray-100">
        Payment Methods
      </h1>
      <ul className="border-t border-gray-200 divide-y divide-gray-200">
        {paymentMethods.map((paymentMethod) => (
          <li key={paymentMethod.id} className="py-4 flex items-center justify-between">
            <div className="flex-1">
              <div className="text-lg font-medium text-gray-900">{paymentMethod.name}</div>
              <div className="text-gray-500">{paymentMethod.cardNumber}</div>
              <div className="text-gray-500">{paymentMethod.expiryDate}</div>
            </div>
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">Edit</button>
          </li>
        ))}
      </ul>
    </div>
    

    )
}