import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65460598fe036a2fa9551450.mockapi.io/dev';

export const requestCarsThunk = createAsyncThunk(
  'cars/getAll',
  async (page, thunkApi) => {
    const params = new URLSearchParams([
      ['page', `${page}`],
      ['limit', 12],
    ]);
    try {
      const { data } = await axios.get(`/adverts`, { params });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const requestFilteredCarsThunk = createAsyncThunk(
  'cars/getFiltered',
  async (make, thunkApi) => {
    const params = new URLSearchParams([['make', `${make}`]]);
    try {
      const { data } = await axios.get(`/adverts`, { params });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cars: null,
  isLoading: null,
  error: null,
  page: 1,
  showMoreButton: false,
  showModal: false,
  carId: null,
};

const carsListSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    loadMore: state => {
      state.page += 1;
    },
    goToFirstPage: state => {
      state.cars = null;
      state.page = 1;
    },
    setModalStatus: (state, action) => {
      state.showModal = action.payload;
    },
    setCarId: (state, action) => {
      state.carId = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      //Request default car's list
      .addCase(requestCarsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.length === 12) {
          state.showMoreButton = true;
        } else {
          state.showMoreButton = false;
        }
        if (state.cars !== null && state.page !== 1) {
          state.cars = [...state.cars, ...action.payload];
        }
        if (state.cars === null) {
          state.cars = action.payload;
        }
      })
      .addCase(requestCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //Request filtered car's list
      .addCase(requestFilteredCarsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestFilteredCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.showMoreButton = false;
        state.cars = action.payload;
      })
      .addCase(requestFilteredCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const selectAllCars = state => state.cars.cars;
export const selectCarsIsLoading = state => state.cars.isLoading;
export const selectCarsError = state => state.cars.error;
export const selectCarsPage = state => state.cars.page;
export const selectShowMoreButton = state => state.cars.showMoreButton;
export const selectShowModal = state => state.cars.showModal;
export const selectCarId = state => state.cars.carId;

export const { loadMore, goToFirstPage, setModalStatus, setCarId } =
  carsListSlice.actions;
export const carsListReducer = carsListSlice.reducer;
