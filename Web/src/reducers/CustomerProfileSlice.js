import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateNewTour, DeleteTour, GetTourDetails, GetToursList } from '../api/TourApis';
import { toast } from 'react-toastify';
import { CreateCustomers, CreateHotelCustomers, CreateTransportCustomers, GetCustomersList, GetHotelCustomersList, GetTransportCustomersList, updateBookingStatus, updateHotelBookingStatus, updateTransportBookingStatus } from '../api/CustomerApis';


const initialState = {
  profileData: {},
  profile: [],
  unAssignedList: [],
  status: 'idle',
  screenMode: 'list',
  customers: {},
  hotelCustomers: {},
  transportCustomers: {}
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const GetCustomersListAsync = createAsyncThunk(
  'CustomerSlice/getcustomer',
  async (data) => {
    const response = await GetCustomersList(data.params, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const GetHotelCustomersListAsync = createAsyncThunk(
  'CustomerSlice/gethotelcustomer',
  async (data) => {
    const response = await GetHotelCustomersList(data.params, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const GetTransportCustomersListAsync = createAsyncThunk(
  'CustomerSlice/gettransportcustomer',
  async (data) => {
    const response = await GetTransportCustomersList(data.params, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const createNewCustomerAsync = createAsyncThunk(
  'CustomerSlice/createcustomer',
  async (data) => {
    console.log(data)
    const response = await CreateCustomers(data.formData, data.token);
    return response.data;
  }
);

export const createNewHotelCustomerAsync = createAsyncThunk(
  'CustomerSlice/createhotelcustomer',
  async (data) => {
    console.log(data)
    const response = await CreateHotelCustomers(data.formData, data.token);
    return response.data;
  }
);

export const createNewTransportCustomerAsync = createAsyncThunk(
  'CustomerSlice/createtransportcustomer',
  async (data) => {
    console.log(data)
    const response = await CreateTransportCustomers(data.formData, data.token);
    return response.data;
  }
);

export const updateBookingStatusAsync = createAsyncThunk(
  'CustomerSlice/updatebookingstatus',
  async (data) => {
    const response = await updateBookingStatus(data.params, data.token);
    return response.data;
  }
);

export const updateHotelBookingStatusAsync = createAsyncThunk(
  'CustomerSlice/updatehotelbookingstatus',
  async (data) => {
    const response = await updateHotelBookingStatus(data.params, data.token);
    return response.data;
  }
);

export const updateTransportBookingStatusAsync = createAsyncThunk(
  'CustomerSlice/updatetransportbookingstatus',
  async (data) => {
    const response = await updateTransportBookingStatus(data.params, data.token);
    return response.data;
  }
);

export const CustomerProfileSlice = createSlice({
  name: 'CustomerSlice',
  initialState,
  /*  reducers: {
      changeScreen: (state, action) => {
       // state.screen = action.payload
      },
  
    },*/
  extraReducers: (builder) => {
    builder
      .addCase(GetCustomersListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.customers = action.payload.list
        // state.profileData = action.payload.token;
      })
      .addCase(GetHotelCustomersListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.hotelCustomers = action.payload.list
        // state.profileData = action.payload.token;
      })
      .addCase(GetTransportCustomersListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.transportCustomers = action.payload.list
        // state.profileData = action.payload.token;
      })
      .addCase(createNewCustomerAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewCustomerAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload)
        toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      })
      .addCase(createNewHotelCustomerAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewHotelCustomerAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      })
      .addCase(createNewTransportCustomerAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewTransportCustomerAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      })
      .addCase(updateBookingStatusAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateBookingStatusAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.profileData= action.payload
        // state.profileData = action.payload.token;
        toast.success(action.payload.message)
      })
      .addCase(updateHotelBookingStatusAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateHotelBookingStatusAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.profileData= action.payload
        // state.profileData = action.payload.token;
        toast.success(action.payload.message)
      })
      .addCase(updateTransportBookingStatusAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateTransportBookingStatusAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.profileData= action.payload
        // state.profileData = action.payload.token;
        toast.success(action.payload.message)
      });
  },
});

export const { changeScreen } = CustomerProfileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScreenMode = (state) => state.CustomerSlice.screenMode;

export const getProfiles = (state) => state.CustomerSlice.profile;

export const getAvailableProfiles = (state) => state.CustomerSlice.unAssignedList;

export const getCustomer = (state) => state.CustomerSlice.customers?state.CustomerSlice.customers:[];

export const getHotelCustomer = (state) => state.CustomerSlice.hotelCustomers;

export const getTransportCustomer = (state) => state.CustomerSlice.transportCustomers;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default CustomerProfileSlice.reducer;
