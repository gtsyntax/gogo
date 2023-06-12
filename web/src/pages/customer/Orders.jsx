import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { getTotal } from "../../slices/order";

export default function CustomerOrders() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { orderList } = useSelector((state) => state.order);

  // const dispatch = useDispatch();
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <main className="p-8">
      <h1>{currentUser.username}</h1>
      <p>{currentUser.id}</p>
      <section className="grid grid-cols-3 gap-4">
        {orderList.map((order, order_id) => (
          <div key={order_id} className="relative border p-4">
            <Link to={`/store/${order.order_id}`}>
              <h1 className="text-xl">{order.restaurant_name}</h1>
              {order.items.map((item, item_id) => (
                <div key={item_id}>
                  <div className="text-gray-900 text-sm flex justify-between">
                    <div>
                      {item.quantity} {item.item_name}
                    </div>
                    <div className="text-brand-primary">{item.item_price}</div>
                  </div>
                </div>
              ))}
              <div className="text-gray-900 text-sm flex justify-between">
                <div className="font-medium">Total:</div>
                {/* <div className="text-brand-primary">{getTotal()}</div> */}
              </div>

              <p className="text-gray-500 text-sm">
                Ordered on:
                {order.order_time}
              </p>
              <p className="text-gray-500 text-sm">
                Destination:{order.delivery_address}
              </p>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
