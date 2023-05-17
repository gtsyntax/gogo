export default function PartnerDashboard() {
    return (
        <main className="p-8">
            <h1 className="mb-4 text-2xl font-semibold">Dashboard</h1>
            <hr/>
            <section className="grid grid-cols-6 mt-8">
                <div className="grid items-center col-span-1 h-96">
                    <h1 className="text-xl font-semibold">Overview</h1>
                    <div>
                        <p className="text-gray-400">Revenue</p>
                        <p className="font-bold text-2xl">855.4k</p>
                    </div>
                    <div>
                        <p className="text-gray-400">Orders Completed</p>
                        <p className="font-bold text-2xl">120,754</p>
                    </div>
                    <div>
                        <p className="text-gray-400">Active Customers</p>
                        <p className="font-bold text-2xl">73.57%</p>
                    </div>
                </div>
                <div className="col-span-2">right</div>
            </section>
        </main>
    )
}