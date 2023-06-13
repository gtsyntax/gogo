export default function StorePage({params}) {
    console.log(params)
    return (
        <main>
            <section className="bg-emerald-700 py-4 px-16">
                <nav className="flex justify-between items-center">
                    <h1 className="text-white font-bold text-4xl">Gogo</h1>
                    <ul className="flex gap-4">
                        <li className="text-white text-xl">Cart(0)</li>
                        <li className="text-white text-xl">john_doe</li>
                    </ul>
                </nav>
            </section>
        </main>
    )
}