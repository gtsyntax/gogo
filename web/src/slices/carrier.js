import { createSlice } from "@reduxjs/toolkit";
import orders from "../util/orders.json";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080/api/order';
const initialState = {
  orderList: [...orders],
  status: false,
  answered: false,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orderList = action.payload;
    },
    acceptOrder: (state, action) => {
      const orderId = action.payload;
      const order = state.orderList.find((order) => order.order_id === orderId);
      if (order) {
        order.status = "Accepted";
      }
      state.status = true;
      state.answered = true;
      console.log('accepted');
    },
    declineOrder: (state, action) => {
      const orderId = action.payload;
      const order = state.orderList.find((order) => order.order_id === orderId);
      if (order) {
        order.status = "Declined";
      }
      state.status = false;
      state.answered = true;
      console.log('declined');
    },
  },
});

export const { setOrders,acceptOrder, declineOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
