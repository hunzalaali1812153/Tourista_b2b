import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateNewTour, DeleteTour, GetAllToursList, GetCollabToursList, GetTourDetails, GetToursList, UpdateTour } from '../api/TourApis';
import { toast } from 'react-toastify';


const initialState = {
  profileData: {},
  profile: [],
  unAssignedList: [],
  status: 'idle',
  screenMode: 'list',
  tours: [],
  allTours: [],
  collabTours: []
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const GetAllToursListAsync = createAsyncThunk(
  'TourSlice/getalltour',
  async (data) => {
    const response = await GetAllToursList(data.formData, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const GetToursListAsync = createAsyncThunk(
  'TourSlice/gettour',
  async (data) => {
    const response = await GetToursList(data.formData, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const GetCollabToursListAsync = createAsyncThunk(
  'TourSlice/getcollabtour',
  async (data) => {
    const response = await GetCollabToursList(data.formData, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const createNewTourAsync = createAsyncThunk(
  'TourSlice/createtour',
  async (data) => {
    console.log(data)
    const response = await CreateNewTour(data.formData, data.token);
    return response.data;
  }
);

export const GetTourDetailsAsync = createAsyncThunk(
  'TourSlice/details',
  async (data) => {
    const response = await GetTourDetails(data.params, data.token);
    console.log('res',response);
    return response.data;
  }
);

export const DeleteTourAsync = createAsyncThunk(
  'TourSlice/delete',
  async (data) => {
    const response = await DeleteTour(data.params, data.token);
    return response.data;
  }
);

export const UpdateTourAsync = createAsyncThunk(
  'TourSlice/update',
  async (data) => {
    const response = await UpdateTour(data.params, data.token);
    return response.data;
  }
);


export const TourProfileSlice = createSlice({
  name: 'TourSlice',
  initialState,
  /*  reducers: {
      changeScreen: (state, action) => {
       // state.screen = action.payload
      },
  
    },*/
  extraReducers: (builder) => {
    builder
      .addCase(GetAllToursListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.allTours = action.payload.tours
        // state.profileData = action.payload.token;
      })
      .addCase(GetToursListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tours = action.payload.tours
        // state.profileData = action.payload.token;
      })
      .addCase(GetCollabToursListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.collabTours = action.payload.tours
        // state.profileData = action.payload.token;
      })
      .addCase(createNewTourAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewTourAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      }).addCase(GetTourDetailsAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(GetTourDetailsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.profileData= action.payload.details
        // state.profileData = action.payload.token;
      })
      .addCase(DeleteTourAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(DeleteTourAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.profileData= action.payload
        // state.profileData = action.payload.token;
        toast.success(action.payload.message)
      })
      .addCase(UpdateTourAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(UpdateTourAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.profileData= action.payload
        // state.profileData = action.payload.token;
        toast.success(action.payload.message)
      });
  },
});

export const { changeScreen } = TourProfileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScreenMode = (state) => state.TourSlice.screenMode;

export const getProfiles = (state) => state.TourSlice.profile;

export const getAvailableProfiles = (state) => state.TourSlice.unAssignedList;

export const getTours = (state) => state.TourSlice.tours;

export const getAllTours = (state) => state.TourSlice.allTours;

export const getCollabTours = (state) => state.TourSlice.collabTours;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default TourProfileSlice.reducer;
