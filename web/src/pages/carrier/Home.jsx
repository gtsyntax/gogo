import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import carrier, { acceptOrder, declineOrder ,setOrders } from "../../slices/carrier";
import axios from "axios";



export default function PartnerOrders() {
  const dispatch = useDispatch();

  useEffect(() => {
    const courierId = "acbeee84-f056-4478-b049-22164bb6638f";
    const params = {
      courier_id: courierId,
    };
  
    axios.get("/api/order", { params })
      .then((response) => {
        const orders = response.data;
        dispatch(setOrders(orders));
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, [dispatch]);
  

  return (
    <main className="p-8">
      <h1 className="mb-4 text-2xl font-semibold">Orders</h1>
      <hr />
      <section className="col-span-3">
        <OrderItemList />
      </section>
    </main>
  );
}

function OrderItemList() {
  const orderList = useSelector((state) => state.order.orderList);
  return (
    <main className="flex flex-col gap-8">
      {orderList.map((order, index) => (
        <OrderItem order={order} key={index} />
      ))}
    </main>
  );
}

function OrderItem({ order }) {
  const dispatch = useDispatch();
  return (
    <div className="shadow-lg rounded p-8 flex divide-x">
      <div className="py-4 px-8">
        <h1 className="text-xl">{order.customer_name}</h1>
        <p>
          <span className="text-gray-500">Order ID:</span> {order.order_id}
        </p>
        <p>
          <span className="text-gray-500">Phone:</span> {order.customer_phone}
        </p>
      </div>

      <div className="px-8 divide-y">
        {order.items.map((item, index) => (
          <div className="py-4" key={index}>
            <p>{item.item_name}</p>
            <p>
              <span className="text-gray-500">Price:</span> &#8378;
              {item.item_price}
            </p>
            <p>
              <span className="text-gray-500">Qty:</span> {item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="py-4 px-8">
        <p>
          <span className="text-gray-500">Delivery address:</span>{" "}
          {order.delivery_address}
        </p>
        <p>
          <span className="text-gray-500">Placed:</span> {order.order_time}
        </p>
        <p>
          <span className="text-gray-500">Sub total:</span> &#8378;
          {order.subtotal}
        </p>
        <p>
          <span className="text-gray-500">Tax:</span> &#8378;{order.tax}
        </p>
        <p>
          <span className="text-gray-500">Delivery fee:</span> &#8378;
          {order.delivery_fee}
        </p>
        <p>
          <span className="text-gray-500">Total:</span> &#8378;{order.total}
        </p>
        <p>
          <span className="text-gray-500">Payment method:</span>{" "}
          {order.payment_method}
        </p>
      </div>

      <div className="py-4 px-8">
        <p className="text-gray-500">Delivery courier details</p>
        <button
          onClick={() => {
            dispatch(acceptOrder(order.order_id));
          }}
          className="bg-brand-primary m-2 py-2 px-8 text-brand-white rounded"
        >
          Accept order
        </button>
        <button
          onClick={() => {
            dispatch(declineOrder(order.order_id));
          }}
          className="bg-brand-primary m-2 py-2 px-8 text-brand-white rounded"
        >
          decline order
        </button>
      </div>
    </div>
  );
}
