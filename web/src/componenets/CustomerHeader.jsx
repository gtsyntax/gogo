import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function CustomerHeader() {
    //const {user} = useSelector(state => state.auth)

    return (
        <main className="bg-brand-white border-b px-16">
            <div className="h-14 flex items-center justify-between">
                <Link to="/customer" className="font-bold text-brand-black transition-all text-opacity-80 hover:text-opacity-100">GOGO</Link>
                <nav className="flex gap-x-4 items-center cursor-pointer">
                    {/* <p className="font-semibold">{user.username}</p> */}
                    <div className="w-8 h-8 border rounded-full bg-brand-black"></div>
                </nav>
            </div>
        </main>
    )
}