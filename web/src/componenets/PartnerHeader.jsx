import { Link } from "react-router-dom"

export default function PartnerHeader() {
    return (
        <main className="bg-brand-white border-b px-16">
            <div className="h-14 flex items-center justify-between">
                <Link to="/partner" className="font-bold text-brand-black transition-all text-opacity-80 hover:text-opacity-100">GOGO</Link>
                <nav className="flex gap-x-8">
                </nav>
            </div>
        </main>
    )
}