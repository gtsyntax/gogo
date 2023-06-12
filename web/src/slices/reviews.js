import { createSlice } from "@reduxjs/toolkit";
import reviewsData from "../util/reviews.json";

const initialState = {
  reviewList: [...reviewsData],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
});

export default reviewsSlice.reducer;
