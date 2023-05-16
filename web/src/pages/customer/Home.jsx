import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom';

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com',phoneNum: 50505040 },
  ];
export default function CustomerHome() {
    // const { user: currentUser } = useSelector((state) => state.auth)

    // if (!currentUser) {
    //     return <Navigate to="/" />
    // }

    return (
        <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4 bg-brand-primary hover:bg-brand-secondary transition-colors text-white rounded-md p-3 p-4 rounded-md ">
        User info
      </h1>
      <ul className="border-t border-gray-200 divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id} className="py-4 flex items-center justify-between">
            <div className="flex-1">
              <div className="text-lg font-medium text-gray-900">{user.name}</div>
              <div className="text-gray-500">{user.email}</div>
              <div className="text-gray-500">{user.phoneNum}</div>
            </div>
            <Link to={`/users/${user.id}`} className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
    )
}