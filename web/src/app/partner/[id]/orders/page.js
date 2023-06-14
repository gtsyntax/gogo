export default function PartnerOrders() {
    return (
        <main>
            <h1 className="text-2xl font-bold mb-8">Orders</h1>
            <hr />
            <div className="border h-[600px] mt-8 py-4 px-8">
                <table className="w-full">
                    <thead>
                        <tr className="text-sm font-semibold">
                            <td className="py-4 border-b border-gray-100">OrderId</td>
                            <td className="py-4 border-b border-gray-100">Customer</td>
                            <td className="py-4 border-b border-gray-100">Menu</td>
                            <td className="py-4 border-b border-gray-100">Amount</td>
                            <td className="py-4 border-b border-gray-100">Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td className="py-4">#{order.id}</td>
                                <td className="py-4">{order.name}</td>
                                <td className="py-4">{order.menu}</td>
                                <td className="py-4">&#8378;{order.total}</td>
                                <td className="py-4 uppercase">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

const orders = [
    {
        id: 1,
        name: "Levi Ackerman",
        menu: "Beef dumpling in hot and sour soup",
        total: 105,
        status: "pending"
    }
]