import { Link } from "@remix-run/react";

export default function SecondaryNav() {
    return (
        <nav className="flex h-20 items-center bg-white px-8 border-b border-gray-200">
                <Link to="/" className="basis-1/12 font-bold">GOGO</Link>
                <input className="basis-3/5 p-4" type="text" placeholder="Search restaurants and stores" />
                <div className="basis-2/5 flex items-center justify-end gap-8">
                    <p className="font-bold">Istanbul</p>
                    <p className="font-bold">&#x1f6d2; 0</p>
                    <Link to="/login" className="font-bold">Log in</Link>
                    <Link to="/register" className="bg-amber-400 px-12 py-2 rounded-full font-bold">Sign up</Link>
                </div>
        </nav>
    )
}