import { createSlice } from "@reduxjs/toolkit"
import favorites from "../util/favorites.json"

const initialState = {
  favoritesList: [...favorites],
  totalFavorites: favorites.length,
  favoriteIcon:false,
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoritesList.push(payload)
      state.totalFavorites = state.favoritesList.length
      state.favoriteIcon = true
      console.log('colorchanged')
    },
    removeFavorite: (state, { payload }) => {
      state.favoritesList = state.favoritesList.filter(
        restaurant => restaurant.id !== payload.id
        )
      state.favoriteIcon = false
      state.totalFavorites = state.favoritesList.length
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
