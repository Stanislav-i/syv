import { createSlice } from '@reduxjs/toolkit';

// import defaultContacts from '../data/defaultContacts';

const initialState = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.favourites.push(action.payload);
    },
    deleteCar: (state, action) => {
      const index = state.favourites.findIndex(
        car => car.id === action.payload
      );
      state.favourites.splice(index, 1);
    },
  },
});

export const selectFavouritesCars = state => state.favourites.favourites;
export const { addCar, deleteCar } = favouritesSlice.actions;

export const favouritesReducer = favouritesSlice.reducer;