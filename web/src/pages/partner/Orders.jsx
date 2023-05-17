import { useSelector } from "react-redux"

export default function PartnerOrders(){
    return (
        <main className="p-8">
            <h1 className="mb-4 text-2xl font-semibold">Orders</h1>
            <hr/>
            <section className="col-span-3">
                <OrderItemList />
            </section>
            <section className="border col-span-1">right</section>
        </main>
    )
}

function OrderItemList() {
    const orderList = useSelector((state) => state.order.orderList)
    return (
        <main className="flex flex-col gap-8">
            {orderList.map((order, index) => <OrderItem order={order} key={index} />)}
        </main>
    )
}

function OrderItem({order}) {
    return (
        <div className="shadow-lg rounded p-8 flex divide-x">
            <div className="py-4 px-8">
                <h1 className="text-xl">{order.customer_name}</h1>
                <p><span className="text-gray-500">Order ID:</span> {order.order_id}</p>
                <p><span className="text-gray-500">Phone:</span> {order.customer_phone}</p>
            </div>

            <div className="px-8 divide-y">
                {order.items.map((item, index) => (
                    <div className="py-4" key={index}>
                        <p>{item.item_name}</p>
                        <p><span className="text-gray-500">Price:</span> &#8378;{item.item_price}</p>
                        <p><span className="text-gray-500">Qty:</span> {item.quantity}</p>
                    </div>
                ))}
            </div>

            <div className="py-4 px-8">
                <p><span className="text-gray-500">Delivery address:</span> {order.delivery_address}</p>
                <p><span className="text-gray-500">Placed:</span> {order.order_time}</p>
                <p><span className="text-gray-500">Sub total:</span> &#8378;{order.subtotal}</p>
                <p><span className="text-gray-500">Tax:</span> &#8378;{order.tax}</p>
                <p><span className="text-gray-500">Delivery fee:</span> &#8378;{order.delivery_fee}</p>
                <p><span className="text-gray-500">Total:</span> &#8378;{order.total}</p>
                <p><span className="text-gray-500">Payment method:</span> {order.payment_method}</p>
                <button className="bg-brand-primary my-2 py-2 px-8 text-brand-white rounded">Mark for Delivery</button>
            </div>

            <div className="py-4 px-8">
                <p className="text-gray-500">Delivery courier details</p>
            </div>
        </div>
    )
}