import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { CreateNewTransport, deleteTransport, GetAllTransportsList, GetTransportDetails, GetTransportsList } from '../api/TransportApis';


const initialState = {
  profileData: {},
  profile: [],
  unAssignedList: [],
  status: 'idle',
  screenMode: 'list',
  transports: [],
  allTransports: []
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const GetTransportsListAsync = createAsyncThunk(
  'TransportSlice/gettransport',
  async (data) => {
    const response = await GetTransportsList(data.formData, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const GetAllTransportsListAsync = createAsyncThunk(
  'TransportSlice/getalltransport',
  async (data) => {
    const response = await GetAllTransportsList(data.formData, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const createNewTransportAsync = createAsyncThunk(
  'TransportSlice/createtransport',
  async (data) => {
    const response = await CreateNewTransport(data.formData, data.token);
    return response.data;
  }
);

export const GetTransportDetailsAsync = createAsyncThunk(
  'TransportSlice/details',
  async (data) => {
    const response = await GetTransportDetails(data.params, data.token);
    console.log('res',response);
    return response.data;
  }
);

export const DeleteTransportAsync = createAsyncThunk(
  'TransportSlice/delete',
  async (data) => {
    const response = await deleteTransport(data.params, data.token);
    return response.data;
  }
);

export const TransportProfileSlice = createSlice({
  name: 'TransportSlice',
  initialState,
  /*  reducers: {
      changeScreen: (state, action) => {
       // state.screen = action.payload
      },
  
    },*/
  extraReducers: (builder) => {
    builder
      .addCase(GetTransportsListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.transports = action.payload.transports
        // state.profileData = action.payload.token;
      })
      .addCase(GetAllTransportsListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.allTransports = action.payload.transports
        // state.profileData = action.payload.token;
      })
      .addCase(createNewTransportAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewTransportAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      })
      .addCase(GetTransportDetailsAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(GetTransportDetailsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.profileData= action.payload.details
        // state.profileData = action.payload.token;
      })
      .addCase(DeleteTransportAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(DeleteTransportAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.profileData= action.payload
        // state.profileData = action.payload.token;
        toast.success(action.payload.message)
      });
  },
});

export const { changeScreen } = TransportProfileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScreenMode = (state) => state.TransportSlice.screenMode;

export const getProfiles = (state) => state.TransportSlice.profile;

export const getAvailableProfiles = (state) => state.TransportSlice.unAssignedList;

export const getTransports = (state) => state.TransportSlice.transports;

export const getAllTransports = (state) => state.TransportSlice.allTransports;


// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default TransportProfileSlice.reducer;
