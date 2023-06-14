export default function StorePage({params}) {
    return (
        <section className="container mx-auto">
            <div className="border p-8 mb-16">
                <h1 className="text-4xl font-bold">Thai Villa</h1>
                <p className="text-xl">4.8 (200+ ratings) &middot; &#8378;50 Minimum Delivery Fee &middot; &#8378;&#8378;</p>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-8">Menus</h2>
                <hr />
                <div className="mt-4">
                    <h1>Loading...</h1>
                </div>
            </div>
        </section>
    )
}