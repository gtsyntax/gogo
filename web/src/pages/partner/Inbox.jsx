export default function PartnerInbox() {
    const order = {
        id: 1,
        customerName: 'John Doe',
        restaurant: 'Delicious Bistro',
        totalAmount: 25.99,
        deliveryAddress: '123 Main St, City',
    };

    return (
        <main className="p-8">
            <h1 className="mb-4 text-2xl font-semibold">Inbox</h1>
            <hr/>
            <PartnerOrderDetails order={order} />
        </main>
    )
}


const PartnerOrderDetails = ({ order }) => {
    const handleAcceptOrder = () => {
      // Handle accept order logic
    };
  
    const handleDeclineOrder = () => {
      // Handle decline order logic
    };
  
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4">New Order Details</h2>
            <p className="text-gray-700 mb-4">
            <span className="font-semibold">Order ID:</span> {order.id}
            </p>
            <div className="border-t border-gray-300 pt-4">
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Customer Name:</span> {order.customerName}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Restaurant:</span> {order.restaurant}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Total Amount:</span> ${order.totalAmount}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Delivery Address:</span> {order.deliveryAddress}
            </p>
            </div>
            <div className="mt-6 flex justify-end">
            <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium mr-2"
                onClick={handleAcceptOrder}
            >
                Accept Order
            </button>
            <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium"
                onClick={handleDeclineOrder}
            >
                Decline Order
            </button>
            </div>
        </div>
    );
};