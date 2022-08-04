import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { CreateNewHotel, deleteHotel, GetAllHotelsList, GetHotelDetails, GetHotelsList } from '../api/HotelApis';
import { toast } from 'react-toastify';


const initialState = {
  profileData: {},
  profile: [],
  unAssignedList: [],
  status: 'idle',
  screenMode: 'list',
  hotels: [],
  allHotels: []
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const GetHotelsListAsync = createAsyncThunk(
  'HotelSlice/gethotels',
  async (data) => {
    const response = await GetHotelsList(data.formData, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const GetAllHotelsListAsync = createAsyncThunk(
  'HotelSlice/getallhotels',
  async (data) => {
    const response = await GetAllHotelsList(data.formData, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const createNewHotelAsync = createAsyncThunk(
  'HotelSlice/createhotels',
  async (data) => {
    console.log(data)
    const response = await CreateNewHotel(data.formData, data.token);
    return response.data;
  }
);

export const GetHotelDetailsAsync = createAsyncThunk(
  'HotelSlice/details',
  async (data) => {
    const response = await GetHotelDetails(data.params, data.token);
    console.log('res',response);
    return response.data;
  }
);

export const DeleteHotelAsync = createAsyncThunk(
  'HotelSlice/delete',
  async (data) => {
    const response = await deleteHotel(data.params, data.token);
    return response.data;
  }
);


export const HotelProfileSlice = createSlice({
  name: 'HotelSlice',
  initialState,
  /*  reducers: {
      changeScreen: (state, action) => {
       // state.screen = action.payload
      },
  
    },*/
  extraReducers: (builder) => {
    builder
      .addCase(GetAllHotelsListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.allHotels = action.payload.list
        // state.profileData = action.payload.token;
      })
      .addCase(GetHotelsListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.hotels = action.payload.list
        // state.profileData = action.payload.token;
      })
      .addCase(createNewHotelAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewHotelAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      })
      .addCase(GetHotelDetailsAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(GetHotelDetailsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.profileData= action.payload.details
        // state.profileData = action.payload.token;
      })
      .addCase(DeleteHotelAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(DeleteHotelAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.profileData= action.payload
        // state.profileData = action.payload.token;
        toast.success(action.payload.message)
      });
  },
});

export const { changeScreen } = HotelProfileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScreenMode = (state) => state.HotelSlice.screenMode;

export const getProfiles = (state) => state.HotelSlice.profile;

export const getAvailableProfiles = (state) => state.HotelSlice.unAssignedList;

export const getHotels = (state) => state.HotelSlice.hotels;

export const getAllHotels = (state) => state.HotelSlice.allHotels;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default HotelProfileSlice.reducer;
