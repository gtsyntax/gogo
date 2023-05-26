import { Outlet, Link } from "react-router-dom"

export default function Root() {
    return (
        <main>
            <section className="border">
                <nav className="container mx-auto h-20 flex items-center justify-between">
                    <h1 className="font-bold text-2xl"><Link to={`/`}>Gogo</Link></h1>
                    <ul className="flex gap-2">
                        <li className="text-lg border py-2 px-8"><Link to={`login`}>Login</Link></li>
                        <li className="text-lg border py-2 px-8 bg-black text-white"><Link to={`register`}>Register</Link></li>
                    </ul>
                </nav>
            </section>
            <Outlet />
        </main>
    )
}