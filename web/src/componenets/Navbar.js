import Link from "next/link"
import { useSelector } from "react-redux"

export default function Navbar() {
    const {user} = useSelector(state => state.authReducer)
    return (
        <nav className='flex justify-between items-center border-b border-gray-100 py-4 px-8 mb-4'>
                <h1 className='font-bold text-4xl py-4'><Link href="/">Gogo</Link></h1>

                {user ? (
                    <ul className='flex'>
                        <li className='py-4 px-8 text-xl text-gray-400'>
                            <Link href={`/customer/${user.id}/cart`}>Cart(0)</Link>
                        </li>
                        <li className='py-4 px-8 text-xl text-gray-400'>
                            <Link href="/">Sign Out</Link>
                        </li>
                        <li className='py-4 px-8 text-xl font-bold text-black'>
                            <h1>{user.username}</h1>
                        </li>
                    </ul>
                ) : (
                    <ul className='flex'>
                        <li className='py-4 px-8 text-xl'>
                            <Link href="/customer/login">Log in</Link>
                        </li>
                        <li className='py-4 px-8 text-xl bg-black text-white rounded-full'>
                            <Link href="/customer/register">Create account</Link>
                        </li>
                    </ul>
                )}
        </nav>
    )
}