import { Link } from "@remix-run/react";

export default function PrimaryNav() {
    return(
        <nav className="flex h-20 items-center bg-white px-8 border-b border-gray-200">
            <Link to="/" className="basis-1/12 font-bold">GOGO</Link>
            <Link to="/partner/register" className="basis-1/12 font-bold">Gogo Partner</Link>
            <Link to="/courier/register" className="basis-1/12 font-bold">Gogo Courier</Link>
            <input className="basis-6/12 p-4" type="text" placeholder="Search restaurants and stores" />
            <div className="flex items-center justify-end basis-3/12 gap-8">
                <Link to="/login" className="font-bold">Log in</Link>
                <Link to="/register" className="bg-amber-400 px-12 py-2 rounded-full font-bold">Sign up</Link>
            </div>
        </nav>
    )
}